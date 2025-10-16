
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import BlogDetailHero from '../components/blog/BlogDetailHero';
import BlogPost from '../components/blog/BlogPost';
import RelatedPosts from '../components/blog/RelatedPosts';

const BlogDetail = () => {
    return (
        <div>
            <Header />
            <BlogDetailHero />
            <BlogPost />
            <RelatedPosts />
            <Footer />
        </div>
    );
};

export default BlogDetail;
