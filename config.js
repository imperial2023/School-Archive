var config = {
    style: 'mapbox://styles/imperial2023/clenywocm00b301kg4rs5e6l1',
    accessToken: 'pk.eyJ1IjoiaW1wZXJpYWwyMDIzIiwiYSI6ImNsZW8xczBpbDBkOXkzcm1tam1pMHRhbmkifQ.cXOYZyRqS3OWMvUoCEIZ9g',
    showMarkers: true,
    markerColor: 'red',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title : 'AMA STA. CRUZ CAMPUS ',
            image: './images/AMA.png',
            description: '🖥💻COLLEGE OF COMPUTER STUDIES:-------- <ul><li>Bachelor of Science in Computer Science</li><li>Bachelor of Science in Information Technology</li><li>Bachelor of Science in Information Systems</li></li><li>Bachelor of Science in Cybersecurity </li></ul> <ul>👨‍🔧👩‍🔧COLLEGE OF ENGINEERING:----------------  <ul><li>Bachelor of Science in Computer Engineering</li><li>Bachelor of Science in  Electronics Engineering</li><li>Bachelor of Science in Industrial Engineering </li></ul> <ul>👨‍💼👩‍💼College of Business Administration:--------------- <ul><li>Bachelor in Business Administration</li><li>Bachelor of Science in Accountancy</li></ul> <ul>College of Arts and Sciences: <ul><li>Bachelor of Arts in English</li><li> Bachelor of Arts in Economics</li><li>Bachelor of Arts in Psychology</li></ul><ul><li>Bachelor of Arts in Political</li><li>Bachelor of Arts in Mass</li>',
            location: {
                center: [121.41540, 14.28019],
             zoom: 19.94,
             pitch: 58.78,
             bearing: -62.41
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: 'STI College - Sta. Cruz',
            image: './images/6t8fc0qv.png',
            description: '👨‍💻INFORMATION & COMMUNICATION TECHNOLOGY:-------------------<ul><li>BS in Information Technology</li><li>BS in Computer Science</li><li>BS in Information System</li></ul> 👨‍💼👩‍💼BUSINESS & MANAGEMENT:-------------<ul><li>BS in Business Administrator</li><li>BS in Accounting Information System</li><li>BS in Management Accounting</li><li>	BS in Retail Technology and Consumer Science</li></ul> 👨‍⚕️👩‍🍳HOSPITALITY MANAGEMENT:--------------<ul><li>BS in Hospitality Management</li><li>BS in Culinary Management</li><li>BS in Hotel and Restaurant Administration</li><li>BS in Hospitality and Restaurant Services</li><li>Professional Culinary Arts</li></ul> 👨‍💼👩‍💼TOURSIM MANAGEMENT:--------------------- <ul><li>BS in Tourism Management</li><li>Tourism and Events Management</li></ul> 👨‍🔧ENGINEERING:------------------<ul><li>BS in Computer engineering</li></ul> 👩‍🔬ARTS & SCIENCES:---------------------<ul><li>Bachelor of Multimedia Arts</li><li>BA in Communication</li></ul> 👨‍✈️MARITIME:-----------------------<ul><li>BS in Marine Transportation</li><li>BS in Marine Engineering</li><li>BS in Naval Architecture and Marine Engineering</li></ul> ',
            location: {
                center: [121.41583, 14.27852],
                zoom: 20.79,
                pitch: 51.98,
                bearing: -146.74
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Philippine Womens University ',
            image: './images/97xf97xp.png',
            description: '🎶MUSIC:---------------<ul>Bachelor of Music major in Popular Music<li></li><li>Bachelor of Music major in Music Education</li><li>Bachelor of Music major in Music Performance</li></ul> 👩‍⚕️MEDICAL & HEALTHCARE:-----------------------<ul><li>BS in Medical Technology</li><li>BS in Nursing</li><li>BS in Nutrition and Dietetics</li><li>BS in Pharmacy</li></ul> 👨‍🏫Teacher Education:---------------------<ul><li>Bachelor of Elementary Education</li><li>Bachelor of Secondary Education</li></ul> 👨‍🔬SOCIAL SCIENCE:--------------------------<ul><li>AB in Foreign Service</li><li>AB in Psychology</li><li>BS in Social Work</li></ul>👨‍💼Tourism, Hospitality & Culinary:----------------------<ul><li>BS in Hospitality Management</li><li>Hotel and Restaurant Management</li><li>Cruise Ship Administration</li><li>Master of Science in Culinary Arts</li><li>BS in International Hospitality Management</li><li>BS in Tourism Management</li></ul> 👨‍💼BUSINESS:-----------------------------<ul><li>BS in Accountancy</li><li>BS in Accounting Technology</li><li>BS in Business Administration</li></ul>🎨ARTS AND DESIGN:---------------------------<ul><li>AB in Fine Arts</li><li>BS in Interior Design</li></ul>CO 🔉COMMUNICATION & INFORMATION SCIENCE:-----------------------<ul><li>AB in Communication Arts</li><li>AB in Fine Arts major in Visual Communication</li></ul>👨‍💻COMPUTER STUDIES:------------------------<ul><li>BS in Information Technology</li></ul> 👩‍🍳PROFESSIONAL & TECHNICAL COURSES:---------------------<ul><li>BS in Food Technology major in Bakery Technology</li></ul> 👨‍🔬SCIENCE:----------------------<ul><li>BS in Environmental Science</li></ul>',
            location: {
                center: [121.41593, 14.28159],
                zoom: 20.48,
                pitch: 57.47,
                bearing: 35.53
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'ACTS COMPUTER COLLEGE',
            image: './images/ACTS.PNG',
            description: '👨‍💻COMPUTER STUDIES:-----------------<ul><li>BS in Information Technology</li><li>BS in Computer Science</li></ul>👨‍💼👩‍💼BUSINESS ADMINISTRATION:---------------<ul><li>BS in Business Asministration</li><li>BS in Secratarial Administration</li><li>BS in Entrepreneurship</li></li><li>BS in Accounting Technology</li></ul>👨‍🏫TEACHER EDUCATION:----------------------</li><li>BS in Technical-Vocation Education</li>',
            location: {
                center: [121.41468, 14.28330],
            zoom: 20.41,
            pitch: 62.64,
             bearing: -63.50
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'UNION COLLEGE OF LAGUNA ',
            image: './images/UNION.PNG',
            description: '👨‍🏫Teacher Education:-----------------<ul><li>Bachelor of Elementary Education </li><li>Bachelor of Secondary Education</li></ul>👨‍💼👩‍💼BUSINESS:---------------------<ul><li>AB in Economics</li><li>BS in Accountancy</li><li>BS in Commerce</li></ul> 👨‍💻COMPUTER STUDIES:-----------------<ul><li>BS in Computer Engineering</li><li>BS in Computer Science</li><li>BS in Information Technology</li></ul> 👨‍💼👩‍💼ADMINISTRATION:---------------<ul><li>BS in Secretarian Administration</li></ul>👮‍♀️👮‍♂️SOCIAL SCIENCE:---------------<ul><li>AB in Political Science</li><li>BS in Criminology</li></ul>👨‍🔧ENGINEERING:----------------<ul><li>BS in Computer Engineering</li></ul> 👨‍💼HUMANITIES:-------------<ul><li>AB in History</li></ul> 📚LANGUAGE:------------<ul><li>AB in English</li></ul> 🧮SCIENCE:------------------<ul><li>AB in Mathematics</li></ul> 👩‍🍳TOURISM,HOSPITALITY & CULINARY:--------------------<ul><li>BS in and Restaurant Management</li></ul>',       
            location: {
                center: [121.41621, 14.28336],
                zoom: 19.50,
                pitch: 50.02,
                bearing: 32.58
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'LAGUNA STATE POLYTECHNIC UNIVERSITY',
            image: './images/ox47kejp.png',
            description: '👩‍🔬ARTS AND SCIENCES:------------<ul><li>Bachelor of Arts in Broadcasting</li><li>BS in Biology</li><li>BS in Chemistry</li></li><li>BS in Mathematics</li></li><li>BS in Psychology</li></ul> 👨‍💼BUSINESS,ADMINISTRATION AND ACCOUNTANCY:-----------------<ul><li>BS in office Adminstration</li><li>BS in Entrepreneurship</li><li>BS in Accountancy</li><li>Master of Public Administration</li></ul> 👨‍💻COMPUTER STUDIES:-------------------------<ul><li>BS in Information Technology</li><li>BS in Computer Science</li><li>Master in Information Technology</li></ul> 👮‍♀️CRIMINAL JUSTICE EDUCATION:-------------------<ul><li>BS in Criminology</li></ul> 👷‍♂️ENGINEERING:----------------<ul><li>BS in Electronics Engineering</li><li>BS in Mechanical Engineering</li><li>BS in Electrical Engineering</li></li><li>BS in Civil Engineering</li></li><li>BS in Computer Engineering</li></ul>👨‍⚕️👩‍⚕️HOSPITALITY MANAGEMENT AND TOURISM:-------------------<ul><li>BS in Hospitality</li><li>BS in Tourism Management</li> 👨‍🔧INDUSTRIAL TECHNOLOGY:------------------<ul><li>BS in Industrial Technology</li></ul> 📚LAW:-------------------<ul><li>Juris Doctor</li></ul> 👩‍⚕️👨‍⚕️NURSING AND ALLIED HEALTH:------------------<ul><li>BS in Science in Nursing</li></ul> 👨‍🏫TEACHER EDUCATION:-------------------------<ul><li>Bachelor of Secondary Education</li><li>Bachelor of Elementary Education</li><li>Bachelor of Technical Vocational Teacher Education</li><li>Bachelor of Physical Education</li><li>Bachelor of Technology and livelihood Education</li><li>Bachelor of Technical Vocational Teacher Education</li><li>Doctor of Education</li><li>Master of Arts in Teaching English</li><li>Master of Arts in Education/li></ul>',
            location: {
                center: [121.39766, 14.26274],
                zoom: 17.94,
                pitch: 54.22,
                bearing: 45.91
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};

const toggleChaptersBtn = document.querySelector('.toggle-chapters');
const chapterSlide = document.querySelector('.chapter-slide');

toggleChaptersBtn.addEventListener('click', function() {
  chapterSlide.classList.toggle('open');
});
