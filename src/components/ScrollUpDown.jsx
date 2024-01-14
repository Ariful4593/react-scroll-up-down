import React, { useEffect, useState } from "react";
import "./ScrollUpDown.css";

const ScrollUpDown = ({
  bottomRef = null,
  topRef = null,
  upIconClassName = "fas fa-arrow-up",
  downIconClassName = "fas fa-arrow-down",
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
          ) : (
            <i
              className={
                scrollDirection === "down" ? downIconClassName : upIconClassName
              }
            ></i>
          )}
        </a>
      )}
    </>
  );
};

export default ScrollUpDown;
