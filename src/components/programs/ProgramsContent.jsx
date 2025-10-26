
import React from 'react';
import CategorySection from '../activities/CategorySection';

const ProgramsContent = () => {
    const formations = {
        id: "logiciels",
        title: "Software Training",
        description: [
            "Our center offers a full range of software training to help you master the most in-demand professional tools on the job market. Our trainers are experts in the field who share their experience and best practices.",
            "The training is provided in rooms equipped with recent equipment and allows for immediate practical learning. We adapt our programs to all levels, from beginner to expert."
        ],
        programs: [
            { name: "AutoCAD", duration: "6 weeks", level: "Beginner to Advanced" },
            { name: "Archicad", duration: "8 weeks", level: "Intermediate" },
            { name: "Revit", duration: "10 weeks", level: "Professional" },
            { name: "SketchUp", duration: "4 weeks", level: "Beginner" }
        ],
        imageUrl: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        imageAlt: "Software training"
    };

    const concours = {
        id: "concours",
        title: "Competition Preparation",
        description: [
            "Our competition preparation program provides you with the methods and knowledge necessary to succeed in your exams and integrate the institutions of your choice. We offer intensive and personalized training according to your level and your objectives.",
            "Our teaching team is made up of experienced professors who are perfectly familiar with the tests and expectations of the various institutions. We provide you with exclusive resources and test simulations."
        ],
        programs: [
            { name: "Grandes Écoles competitions", duration: "12 months", level: "Intensive" },
            { name: "State exams", duration: "6 months", level: "Standard" },
            { name: "International competitions", duration: "8 months", level: "Expert" },
            { name: "Aptitude tests", duration: "3 months", level: "Preparatory" }
        ],
        imageUrl: "https://www.cours-thales.fr/wp-content/uploads/2024/07/eleves-cours-8-2.png",
        imageAlt: "Competition preparation",
        reverse: true
    };

    const conferences = {
        id: "evenements",
        title: "Conferences & Events",
        description: [
            "Participate in our events to broaden your knowledge and stay up-to-date on the latest trends in your field. Our conferences are led by recognized professionals and offer valuable networking opportunities.",
            "Our events range from technical conferences to practical workshops and professional seminars. We adapt the format to the audience and the objectives of each event."
        ],
        programs: [
            { name: "Tech Conferences", duration: "2h", level: "All audiences" },
            { name: "Practical Workshops", duration: "1 day", level: "Intermediate" },
            { name: "Educational Podcasts", duration: "45min", level: "Beginner" },
            { name: "Pro Seminars", duration: "3 days", level: "Professional" }
        ],
        imageUrl: "https://images.unsplash.com/photo-1758691736545-5c33b6255dca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhidXNpbmVzcyUyMGNvbmZlcmVuY2UlMjBwcmVzZW50YXRpb258ZW58MXx8fHwxNzU4NzA4OTUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        imageAlt: "Indoor conference"
    };

    return (
        <>
            <CategorySection {...formations} />
            <CategorySection {...concours} />
            <CategorySection {...conferences} />
        </>
    );
};

export default ProgramsContent;
