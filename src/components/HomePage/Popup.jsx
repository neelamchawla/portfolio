/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useEffect } from "react";
// import Warper from './Warper';
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const PopupBox = () => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  useEffect(() => {
      setTimeout(function () {
        setOpen(true);
      }, 5000);
  }, []);

  return (
    <div>
      <button
        type="button"
        className="button"
        onClick={() => setOpen((o) => !o)}
      >
        New Website Announcement
      </button>

      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal">
          <a className="close" onClick={closeModal}>
            X
          </a>
          <h2 className="header-modal">
            Before you continue to the website...
          </h2>
        </div>

        <div className="bottom-block">
          <p>
          Exciting news! The new version of my website has finally arrived,
          packed with amazing features and a fresh design. I invite you to
          explore it by clicking the link below. Discover a user-friendly
          interface, improved navigation, and updated content to make your
          experience even better. Your feedback is valuable to me, so feel free
          to share your thoughts. Let's embark on this journey together! Click
          the link to check out the new version
          </p>
          <div className="block-footer">
            <a href="https://neelam-portfolio-3d.netlify.app/" target="_blank" rel="noreferrer">
                <button className="promote">Continue</button>
            </a>
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default PopupBox;
