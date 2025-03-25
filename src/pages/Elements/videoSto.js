import React, { useState } from 'react';
import video from "./Video/VideoSTO.mp4";
import { FaTooth, FaFirstAid, FaIceCream, FaClock, FaPlay } from 'react-icons/fa';
import { Modal } from 'react-bootstrap';
import '../style/VideoPlayer.css';

function VideoPlayer() {
  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const tips = [
    { icon: <FaFirstAid />, text: "Mordre sur une compresse stérile pendant 30 minutes" },
    { icon: <FaIceCream />, text: "Éviter les aliments chauds et durs pendant 24h" },
    { icon: <FaClock />, text: "Ne pas rincer la bouche vigoureusement dans les 24h" },
    { icon: <FaTooth />, text: "Reprendre le brossage doux après 24h" }
  ];

  return (
    <div className='container my-5'>
      <div className="video-card p-4 rounded-4 shadow-lg" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="text-start mb-4">
          <h4 className="text-danger fw-bold mb-3">
            <FaTooth className="me-2" />
            Astuce post-extraction dentaire
          </h4>
          <h2 className="fw-bold text-dark mb-4">
            Après une extraction dentaire, que faire ?
          </h2>
          
          <div className="tips-grid mb-4">
            {tips.map((tip, index) => (
              <div key={index} className="tip-item d-flex align-items-center p-3 bg-light rounded-3">
                <span className="tip-icon me-3 text-primary">{tip.icon}</span>
                <span>{tip.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div 
          className="video-wrapper rounded-3 overflow-hidden mb-3 position-relative"
          onClick={() => setShowModal(true)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ cursor: 'pointer' }}
        >
          <video 
            className="w-100"
            muted
            loop
            playsInline
          >
            <source src={video} type="video/mp4" />
          </video>
          {isHovered && (
            <div className="position-absolute top-50 start-50 translate-middle">
              <FaPlay size={48} color="#fff" style={{ opacity: 0.8 }} />
            </div>
          )}
        </div>

        {/* La phrase que vous souhaitez conserver */}
        <div className="mt-3 text-muted small">
          <p>Consultez toujours votre dentiste en cas de saignement persistant ou de douleur intense.</p>
        </div>
      </div>

      {/* Modal ajustée avec taille contrôlée */}
      <Modal 
        show={showModal} 
        onHide={() => setShowModal(false)}
        centered
        dialogClassName="custom-modal-size"
      >
        <Modal.Body className="p-0 bg-black">
          <div className="responsive-video-container">
            <video 
              controls 
              autoPlay 
              className="modal-video-content"
            >
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default VideoPlayer;