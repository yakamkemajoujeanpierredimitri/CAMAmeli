
import React from 'react';
import CategorySection from '../activities/CategorySection';

const ProgrammesContent = () => {
    const formations = {
        id: "logiciels",
        title: "Formations Logicielles",
        description: [
            "Notre centre propose une gamme complète de formations logicielles pour vous permettre de maîtriser les outils professionnels les plus demandés sur le marché du travail. Nos formateurs sont des experts du domaine qui partagent leur expérience et leurs bonnes pratiques.",
            "Les formations sont dispensées dans des salles équipées de matériel récent et permettent un apprentissage pratique immédiat. Nous adaptons nos programmes à tous les niveaux, du débutant à l'expert."
        ],
        programs: [
            { name: "AutoCAD", duration: "6 semaines", level: "Débutant à Avancé" },
            { name: "Archicad", duration: "8 semaines", level: "Intermédiaire" },
            { name: "Revit", duration: "10 semaines", level: "Professionnel" },
            { name: "SketchUp", duration: "4 semaines", level: "Débutant" }
        ],
        imageUrl: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        imageAlt: "Formation en logiciels"
    };

    const concours = {
        id: "concours",
        title: "Préparation aux Concours",
        description: [
            "Notre programme de préparation aux concours vous offre les méthodes et les connaissances nécessaires pour réussir vos examens et intégrer les institutions de votre choix. Nous proposons des formations intensives et personnalisées selon votre niveau et vos objectifs.",
            "Notre équipe pédagogique est composée de professeurs expérimentés qui connaissent parfaitement les épreuves et les attentes des différentes institutions. Nous mettons à votre disposition des ressources exclusives et des simulations d'épreuves."
        ],
        programs: [
            { name: "Concours Grandes Écoles", duration: "12 mois", level: "Intensif" },
            { name: "Examens d'État", duration: "6 mois", level: "Standard" },
            { name: "Concours Internationaux", duration: "8 mois", level: "Expert" },
            { name: "Tests d'Aptitude", duration: "3 mois", level: "Préparatoire" }
        ],
        imageUrl: "https://www.cours-thales.fr/wp-content/uploads/2024/07/eleves-cours-8-2.png",
        imageAlt: "Préparation aux concours",
        reverse: true
    };

    const conferences = {
        id: "evenements",
        title: "Conférences & Événements",
        description: [
            "Participez à nos événements pour élargir vos connaissances et rester à jour sur les dernières tendances de votre domaine. Nos conférences sont animées par des professionnels reconnus et offrent des opportunités de réseautage précieuses.",
            "Nos événements varient de la conférence technique aux ateliers pratiques, en passant par des séminaires professionnels. Nous adaptons le format à l'audience et aux objectifs de chaque événement."
        ],
        programs: [
            { name: "Conférences Tech", duration: "2h", level: "Tout public" },
            { name: "Workshops Pratiques", duration: "1 jour", level: "Intermédiaire" },
            { name: "Podcasts Éducatifs", duration: "45min", level: "Débutant" },
            { name: "Séminaires Pros", duration: "3 jours", level: "Professionnel" }
        ],
        imageUrl: "https://images.unsplash.com/photo-1758691736545-5c33b6255dca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhidXNpbmVzcyUyMGNvbmZlcmVuY2UlMjBwcmVzZW50YXRpb258ZW58MXx8fHwxNzU4NzA4OTUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        imageAlt: "Conférence en salle"
    };

    return (
        <>
            <CategorySection {...formations} />
            <CategorySection {...concours} />
            <CategorySection {...conferences} />
        </>
    );
};

export default ProgrammesContent;
