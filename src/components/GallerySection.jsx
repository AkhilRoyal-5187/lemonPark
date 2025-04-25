import React, { useState } from 'react';
import { motion } from 'framer-motion';

const GallerySection = () => {
  const sectionStyle = {
    padding: '80px 20px',
    backgroundColor: '#fff8e1',
    textAlign: 'center',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    margin: '40px 0',
  };

  const titleStyle = {
    fontSize: '3.5em',
    color: '#b8860b',
    marginBottom: '50px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.15)',
    letterSpacing: '1.2px',
  };

  const categoriesStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '25px',
    marginBottom: '50px',
    flexWrap: 'wrap',
  };

  const categoryButtonStyle = {
    padding: '18px 35px',
    backgroundColor: '#fff',
    color: '#777',
    border: '2px solid #eee8aa',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '1.1em',
    transition:
      'background-color 0.3s ease-in-out, color 0.3s ease-in-out, border-color 0.3s ease-in-out, transform 0.2s ease',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
    fontWeight: '500',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
  };

  const categoryButtonHoverStyle = {
    backgroundColor: '#ffeb3b',
    borderColor: '#daa520',
    color: '#333',
    transform: 'scale(1.05)',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
  };

  const categoryImageStyle = {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    marginBottom: '15px',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  };

  const categoryImageHoverStyle = {
    transform: 'scale(1.1)',
  };

  const categoryTextStyle = {
    marginTop: '10px',
    fontSize: '0.9em',
  };

  const ctaButtonStyle = {
    padding: '18px 35px',
    backgroundColor: '#daa520',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '1.2em',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease-in-out, transform 0.2s ease',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
    fontWeight: '600',
  };

  const ctaButtonHoverStyle = {
    backgroundColor: '#b8860b',
    transform: 'scale(1.03)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  };

  const photoCategories = [
    { name: "Rooms", imageUrl: "https://static.wixstatic.com/media/c837a6_1c6101ab26bd4ce39dc24d05df83afe1~mv2.jpg/v1/fill/w_432,h_304,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Aura_Restaurant.jpg" },
    { name: "Restaurant", imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Lobby & Reception", imageUrl: "data:image/jpeg;base64,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" },
    { name: "Events", imageUrl: "data:image/jpeg;base64,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    " },
  ];
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [isCtaHovered, setIsCtaHovered] = useState(false);

  return (
    <motion.section
      style={sectionStyle}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <h2 style={titleStyle}>See It Before You Stay</h2>
      <div style={categoriesStyle}>
        {photoCategories.map((category) => (
          <motion.button
            key={category.name}
            style={{
              padding: '18px 35px',
              backgroundColor: '#fff',
              color: '#777',
              border: '2px solid #eee8aa',
              borderRadius: '10px',
              cursor: 'pointer',
              fontSize: '1.1em',
              transition:
                'background-color 0.3s ease-in-out, color 0.3s ease-in-out, border-color 0.3s ease-in-out, transform 0.2s ease',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
              fontWeight: '500',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              overflow: 'hidden',
              position: 'relative',
              ...(hoveredCategory === category.name && {
                backgroundColor: '#ffeb3b',
                borderColor: '#daa520',
                color: '#333',
                transform: 'scale(1.05)',
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
              }),
            }}
            onMouseEnter={() => setHoveredCategory(category.name)}
            onMouseLeave={() => setHoveredCategory(null)}
            onClick={() => console.log(`View photos of ${category.name}`)}
            whileHover={hoveredCategory === category.name ? { scale: 1.05 } : {}}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.img
              src={category.imageUrl}
              alt={category.name}
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                marginBottom: '15px',
                objectFit: 'cover',
                transition: 'transform 0.3s ease',
                ...(hoveredCategory === category.name && {
                    transform: 'scale(1.1)',
                })
              }}

            />
            <span style={{
                marginTop: '10px',
                fontSize: '0.9em',
            }}>{category.name}</span>
          </motion.button>
        ))}
      </div>
      <motion.a
        href="/gallery"
        style={{
            padding: '18px 35px',
            backgroundColor: '#daa520',
            color: '#fff',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            fontSize: '1.2em',
            textDecoration: 'none',
            transition:
              'background-color 0.3s ease-in-out, transform 0.2s ease',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
            fontWeight: '600',
          ...(isCtaHovered && {
            backgroundColor: '#b8860b',
            transform: 'scale(1.03)',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
          })
        }}
        onMouseEnter={() => setIsCtaHovered(true)}
        onMouseLeave={() => setIsCtaHovered(false)}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        View Full Gallery
      </motion.a>
    </motion.section>
  );
};

export default GallerySection;
