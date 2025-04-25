import React, { useState, useEffect } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight, FaRegHeart } from 'react-icons/fa';

const GuestReviews = () => {
  const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    width: '100vw',
    padding: '60px',
    background: 'linear-gradient(135deg, #fff8e1, #ffeb3b)',
    textAlign: 'center',
    overflow: 'hidden',
    fontFamily: 'serif',
  };

  const titleStyle = {
    fontSize: '3.5em',
    color: '#b8860b',
    marginBottom: '60px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.15)',
    letterSpacing: '1.5px',
  };

  const carouselContainerStyle = {
    position: 'relative',
    width: '85%',
    maxWidth: '1000px',
  };

  const carouselWrapperStyle = {
    display: 'flex',
    transition: 'transform 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    alignItems: 'center',
  };

  const reviewCardStyle = {
    flex: '0 0 70%',
    backgroundColor: '#fffaf0',
    border: '1px solid #eee8aa',
    borderRadius: '16px',
    padding: '50px',
    margin: '0 15%',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const starContainerStyle = {
    marginBottom: '20px',
    display: 'flex', // Make stars horizontal
    justifyContent: 'center', // Center the stars
  };

  const starStyle = {
    color: '#ffd700',
    marginRight: '5px', // Reduced right margin
    fontSize: '1.2em', // Slightly smaller stars
  };

  const reviewTextStyle = {
    fontSize: '1.2em',
    lineHeight: '1.8',
    color: '#555',
    fontStyle: 'italic',
    marginBottom: '30px',
  };

  const wishImageContainerStyle = {
    width: '60px', // Further decreased image size
    height: '60px', // Further decreased image size
    borderRadius: '50%',
    overflow: 'hidden',
    marginBottom: '20px',
    alignSelf: 'center',
  };

  const wishImageStyle = {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const wishIconStyle = {
    color: '#ff6f61',
    fontSize: '1.6em', // Slightly smaller icon
    alignSelf: 'flex-end',
  };

  const navigationButtonStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(255, 255, 255, 0.8)',
    border: 'none',
    fontSize: '2.5em',
    color: '#b8860b',
    cursor: 'pointer',
    padding: '20px',
    borderRadius: '50%',
    zIndex: 10,
    boxShadow: '3px 3px 8px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
  };

  const navigationButtonHoverStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    color: '#daa520',
  };

  const prevButtonStyle = {
    left: '30px',
  };

  const nextButtonStyle = {
    right: '30px',
  };

  const ctaStyle = {
    marginTop: '70px',
  };

  const ctaButton = {
    backgroundColor: '#daa520',
    color: '#fff',
    border: 'none',
    borderRadius: '12px',
    padding: '20px 35px',
    cursor: 'pointer',
    margin: '0 20px',
    fontSize: '1.3em',
    textDecoration: 'none',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease-in-out',
  };

  const ctaButtonHoverStyle = {
    backgroundColor: '#b8860b',
  };

  const reviews = [
    {
      text: 'An exquisite experience. The attention to detail and the level of service were truly remarkable. A gem for discerning travelers.',
      rating: 5,
      wishImage: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      text: 'Impeccable comfort and style. From the moment I arrived, I felt like royalty. The amenities and the ambiance were simply divine.',
      rating: 5,
      wishImage: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      text: 'A sanctuary of tranquility and elegance. The staff’s dedication to excellence is evident in every interaction. A truly unforgettable stay.',
      rating: 5,
      wishImage: 'https://images.unsplash.com/photo-1568084686348-aeca669953f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      text: 'Exceptional in every aspect. The luxurious touches and the breathtaking views made my experience truly special. Highly recommended for those seeking indulgence.',
      rating: 5,
      wishImage: 'https://images.unsplash.com/photo-1616940871268-964119898834?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGx1eHVyeSUyMGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPrevHovered, setIsPrevHovered] = useState(false);
  const [isNextHovered, setIsNextHovered] = useState(false);
  const [isReadMoreHovered, setIsReadMoreHovered] = useState(false);
  const [isWriteReviewHovered, setIsWriteReviewHovered] = useState(false);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : reviews.length - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < reviews.length - 1 ? prevIndex + 1 : 0));
  };

  useEffect(() => {
    const intervalId = setInterval(goToNext, 7000);
    return () => clearInterval(intervalId);
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<FaStar key={i} style={i < rating ? starStyle : { color: '#eee8aa', marginRight: '5px', fontSize: '1.2em' }} />);
    }
    return <div style={starContainerStyle}>{stars}</div>;
  };

  const transformValue = -currentIndex * 100 + '%';

  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>What Our Guests Say</h2>
      <div style={carouselContainerStyle}>
        <button
          style={{
            ...navigationButtonStyle,
            ...prevButtonStyle,
            ...(isPrevHovered && navigationButtonHoverStyle),
          }}
          onClick={goToPrevious}
          onMouseEnter={() => setIsPrevHovered(true)}
          onMouseLeave={() => setIsPrevHovered(false)}
        >
          <FaChevronLeft />
        </button>
        <div style={{ ...carouselWrapperStyle, transform: `translateX(${transformValue})` }}>
          {reviews.map((review, index) => (
            <div key={index} style={reviewCardStyle}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
                {review.wishImage && (
                  <div style={wishImageContainerStyle}>
                    <img src={review.wishImage} alt="Luxury Stay" style={wishImageStyle} />
                  </div>
                )}
                {renderStars(review.rating)}
              </div>
              <p style={reviewTextStyle}>"{review.text}"</p>
              <FaRegHeart style={wishIconStyle} />
            </div>
          ))}
        </div>
        <button
          style={{
            ...navigationButtonStyle,
            ...nextButtonStyle,
            ...(isNextHovered && navigationButtonHoverStyle),
          }}
          onClick={goToNext}
          onMouseEnter={() => setIsNextHovered(true)}
          onMouseLeave={() => setIsNextHovered(false)}
        >
          <FaChevronRight />
        </button>
      </div>
      <div style={ctaStyle}>
        <a
          href="/read-more-reviews"
          style={{ ...ctaButton, ...(isReadMoreHovered && ctaButtonHoverStyle) }}
          onMouseEnter={() => setIsReadMoreHovered(true)}
          onMouseLeave={() => setIsReadMoreHovered(false)}
        >
          Read More Reviews
        </a>
        <span> | </span>
        <a
          href="/write-a-review"
          style={{ ...ctaButton, ...(isWriteReviewHovered && ctaButtonHoverStyle) }}
          onMouseEnter={() => setIsWriteReviewHovered(true)}
          onMouseLeave={() => setIsWriteReviewHovered(false)}
        >
          Write a Review
        </a>
      </div>
    </section>
  );
};

export default GuestReviews;