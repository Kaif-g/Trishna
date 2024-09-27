import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './IntroAnimation.css';

const IntroAnimation = ({ onAnimationComplete }) => {
    const [animationComplete, setAnimationComplete] = useState(false);

    useEffect(() => {
        const animationTimeout = setTimeout(() => {
            setAnimationComplete(true);
            onAnimationComplete();
        }, 6000); // Adjust based on your animation duration

        return () => {
            clearTimeout(animationTimeout);
        };
    }, [onAnimationComplete]);

    return (
        <div className={`intro-animation ${animationComplete ? 'fade-out' : ''}`}>
            <div className="animation-container">
                <div className="triangle-row">
                    <motion.div
                        className="triangle triangle-down shade1"
                        initial={{ opacity: 0, x: '-100vw', y: '-100vh' }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 1 }}
                    />
                    <motion.div
                        className="triangle triangle-down shade3"
                        initial={{ opacity: 0, x: '100vw', y: '-100vh' }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    />
                    <motion.div
                        className="triangle triangle-down shade5"
                        initial={{ opacity: 0, x: '-100vw', y: '100vh' }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                    />
                </div>
                <div className="triangle-row" style={{ marginTop: '-70px' }}>
                    <motion.div
                        className="triangle triangle-up shade2"
                        initial={{ opacity: 0, x: '100vw', y: '100vh' }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        style={{ marginLeft: '-50px' }}
                    />
                    <motion.div
                        className="triangle triangle-up shade4"
                        initial={{ opacity: 0, x: '-100vw', y: '100vh' }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        style={{ marginRight: '-50px' }}
                    />
                </div>
                <div className="triangle-row-vertical" style={{ marginTop: '0px', alignItems: 'center', marginLeft: '-60px' }}>
                    <motion.div
                        className="triangle triangle-right shade6"
                        initial={{ opacity: 0, x: '-100vw', y: '-100vh' }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 1, delay: 1.0 }}
                        style={{ marginRight: '0px', marginTop: '0px' }}
                    />
                    <motion.div
                        className="triangle triangle-left shade7"
                        initial={{ opacity: 0, x: '100vw', y: '-100vh' }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        style={{ marginLeft: '100px', marginTop: '-50px' }}
                    />
                    <motion.div
                        className="triangle triangle-right shade8"
                        initial={{ opacity: 0, x: '-100vw', y: '100vh' }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 1, delay: 1.4 }}
                        style={{ marginRight: '0px', marginTop: '-50px' }}
                    />
                </div>
                {!animationComplete && (
                    <motion.div
                        className="intro-text"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 2 }} // Delay after triangles animation completes
                        style={{ fontFamily: 'Young Heart, sans-serif', fontSize: '3em', fontWeight: 'bold', color: '#333', marginTop: '20px' }}
                    >
                        TRISHNA - 2K24
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default IntroAnimation;
