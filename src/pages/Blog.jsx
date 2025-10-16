
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import BlogHero from '../components/blog/BlogHero';
import BlogIntro from '../components/blog/BlogIntro';
import BlogGrid from '../components/blog/BlogGrid';
import BlogSubscribe from '../components/blog/BlogSubscribe';

const Blog = () => {
    return (
        <div>
            <Header />
            <BlogHero />
            <BlogIntro />
            <BlogGrid />
            <BlogSubscribe />
            <Footer />
        </div>
    );
};

export default Blog;
