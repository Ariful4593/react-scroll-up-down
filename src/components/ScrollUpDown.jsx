import React, { useEffect, useState } from "react";
import "./ScrollUpDown.css";

const ScrollUpDown = ({
  bottomRef = null,
  topRef = null,
  upIconColor = "white",
  downIconColor = "white",
  upTitleMessage = "Scroll to top",
  downTitleMessage = "Scroll to bottom",
  style = {},
  renderIcon = null,
}) => {
  const [currentScrollPosition, setCurrentScrollPosition] = useState(0);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(null);
  const [showScrollButton, setShowScrollButton] = useState(true);
  const handleClickToBottom = () => {
    if (bottomRef) {
      bottomRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    } else {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  const handleClickToTop = () => {
    if (topRef) {
      topRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolledPosition =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      setCurrentScrollPosition(scrolledPosition);
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      // console.log({ scrollTop, scrolledPosition });

      if (currentScrollPosition > prevScrollPosition) {
        setScrollDirection("down");
      } else if (currentScrollPosition < prevScrollPosition) {
        setScrollDirection("up");
      }

      if (!scrollTop && !scrolledPosition) {
        setScrollDirection(null);
      }

      setPrevScrollPosition(currentScrollPosition);

      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.offsetHeight;

      // Toggle the visibility of the scroll button based on the scroll position
      setShowScrollButton(!isAtBottom);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPosition, currentScrollPosition]);

  const handleScroll = () => {
    // Check if the user has scrolled to the bottom
    const isBottom =
      window.innerHeight + window.scrollY <= document.body.offsetHeight;

    // Update the state to show or hide the button
    setShowScrollButton(!isBottom);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {showScrollButton && scrollDirection && (
        <a
          to="#"
          id={"scroll_button"}
          style={{
            display: "block",
            cursor: "pointer",
            backgroundColor: "#663399",
            ...style,
          }}
          onClick={
            scrollDirection === "down" ? handleClickToBottom : handleClickToTop
          }
          title={scrollDirection === "down" ? downTitleMessage : upTitleMessage}
        >
          {renderIcon ? (
            renderIcon(scrollDirection)
          ) : scrollDirection === "down" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="12"
              viewBox="0 0 384 512"
              fill={upIconColor}
            >
              <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="12"
              viewBox="0 0 384 512"
              fill={downIconColor}
            >
              <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
            </svg>
          )}
        </a>
      )}
    </>
  );
};

export default ScrollUpDown;
