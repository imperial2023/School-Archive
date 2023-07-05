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
            title : 'AMA STA. CRUZ CAMPUS',
            image: './images/AMA.png',
            description: '<span style="color: #78a5de;"><b>💻COLLEGE OF COMPUTER STUDIES:<b></span> <ul><li>Bachelor of Science in Computer Science</li><li>Bachelor of Science in Information Technology</li><li>Bachelor of Science in Information Systems</li></li><li>Bachelor of Science in Cybersecurity </li></ul> <ul><span style="color: #C09F16;"><b>👨‍🔧👩‍🔧COLLEGE OF ENGINEERING:<b></span>  <ul><li>Bachelor of Science in Computer Engineering</li><li>Bachelor of Science in  Electronics Engineering</li><li>Bachelor of Science in Industrial Engineering </li></ul> <ul><span style="color: #cc5200;"><b>👨‍💼👩‍💼COLLEGE OF BUSINESS ADMINISTRATOR:<b></span><b> <ul><li>Bachelor in Business Administration</li><li>Bachelor of Science in Accountancy</li></ul> <ul>College of Arts and Sciences: <ul><li>Bachelor of Arts in English</li><li> Bachelor of Arts in Economics</li><li>Bachelor of Arts in Psychology</li></ul><ul><li>Bachelor of Arts in Political</li><li>Bachelor of Arts in Mass</li>  Facebook:<a href="https://www.facebook.com/amascl"> /amascl/</a>',
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
            description: '<span style="color: #78a5de;"><b>👨‍💻INFORMATION & COMMUNICATION TECHNOLOGY:<b></span><b><ul><li>BS in Information Technology</li><li>BS in Computer Science</li><li>BS in Information System</li></ul><span style="color: #cc5200;"><b>👨‍💼👩‍💼BUSINESS & MANAGEMENT:<b></span> <ul><li>BS in Business Administrator</li><li>BS in Accounting Information System</li><li>BS in Management Accounting</li><li>	BS in Retail Technology and Consumer Science</li></ul><span style="color: #00e6e6;"><b> 👨‍⚕️👩‍🍳HOSPITALITY MANAGEMENT:<b></span><b> <ul><li>BS in Hospitality Management</li><li>BS in Culinary Management</li><li>BS in Hotel and Restaurant Administration</li><li>BS in Hospitality and Restaurant Services</li><li>Professional Culinary Arts</li></ul><span style="color: #990000;">👨‍💼👩‍💼TOURSIM MANAGEMENT:<b></span><b> <ul><li>BS in Tourism Management</li><li>Tourism and Events Management</li></ul><span style="color: #C09F16;"><b> 👨‍🔧ENGINEERING:<b></span><b> <ul><li>BS in Computer engineering</li></ul><span style="color: #ff6666;"><b> 👩‍🔬ARTS & SCIENCES:<b></span><ul><li>Bachelor of Multimedia Arts</li><li>BA in Communication</li></ul><span style="color: blue;"><b> 👨‍✈️MARITIME:<b></span><b> <ul><li>BS in Marine Transportation</li><li>BS in Marine Engineering</li><li>BS in Naval Architecture and Marine Engineering</li></ul>   Website:<a href="https://www.sti.edu/campuses-details.asp?campus_id=STC">sti.edu/campuses</a></ul>   Facebook:<a href="https://www.facebook.com/stacruz.sti.edu/">/stacruz.sti.edu/</a>',
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
            description: '<span style="color: #6600cc;"><b>🎶MUSIC:<b></span><b> <ul>Bachelor of Music major in Popular Music<li></li><li>Bachelor of Music major in Music Education</li><li>Bachelor of Music major in Music Performance</li></ul><span style="color:  #00e6e6;"><b> 👩‍⚕️MEDICAL & HEALTHCARE:<b></span><b> <ul><li>BS in Medical Technology</li><li>BS in Nursing</li><li>BS in Nutrition and Dietetics</li><li>BS in Pharmacy</li></ul><span style="color: #009900;"><b> 👨‍🏫Teacher Education:<b></span> <ul><li>Bachelor of Elementary Education</li><li>Bachelor of Secondary Education</li></ul><span style="color: #993366;"><b> 👨‍🔬SOCIAL SCIENCE:<b></span> <ul><li>AB in Foreign Service</li><li>AB in Psychology</li><li>BS in Social Work</li></ul><span style="color: #ff1a1a;"><b>👨‍💼Tourism, Hospitality & Culinary:<b></span> <ul><li>BS in Hospitality Management</li><li>Hotel and Restaurant Management</li><li>Cruise Ship Administration</li><li>Master of Science in Culinary Arts</li><li>BS in International Hospitality Management</li><li>BS in Tourism Management</li></ul><span style="color:  #cc5200;"><b> 👨‍💼BUSINESS:<b></span><b> <ul><li>BS in Accountancy</li><li>BS in Accounting Technology</li><li>BS in Business Administration</li></ul><span style="color: #ff6666;"><b>🎨ARTS AND DESIGN:<b></span><b> <ul><li>AB in Fine Arts</li><li>BS in Interior Design</li></ul><span style="color: #ff6699;"><b>🔉COMMUNICATION & INFORMATION SCIENCE:<b></span> <ul><li>AB in Communication Arts</li><li>AB in Fine Arts major in Visual Communication</li></ul><span style="color:  #78a5de;"><b>👨‍💻COMPUTER STUDIES:<b></span> <ul><li>BS in Information Technology</li></ul><span style="color: #00e6e6;"><b>👩‍🍳PROFESSIONAL & TECHNICAL COURSES:<b></span> <ul><li>BS in Food Technology major in Bakery Technology</li></ul><span style="color: #DDA0DD;"><b> 👨‍🔬SCIENCE:<b></span><b> <ul><li>BS in Environmental Science</li></ul> Facebook:<a href="https://www.facebook.com/pwucdcecstacruz/">/pwucdcecstacruz/</a>',
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
            description: '<span style="color: #78a5de;"><b>👨‍💻COMPUTER STUDIES:<b></span> <ul><li>BS in Information Technology</li><li>BS in Computer Science</li></ul><span style="color: #cc5200;"><b>👨‍💼👩‍💼BUSINESS ADMINISTRATION:<b></span><b> <ul><li>BS in Business Asministration</li><li>BS in Secratarial Administration</li><li>BS in Entrepreneurship</li></li><li>BS in Accounting Technology</li></ul><span style="color: #009900;"><b>👨‍🏫TEACHER EDUCATION:<b></span><b></li><li>BS in Technical-Vocation Education</li> Website:<a href="https://www.actscc.edu.ph/">www.actscc.edu.ph/</a> Facebook:<a href="https://www.facebook.com/ACTSCC/">/ACTSCC/</a>',
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
            title: 'UNION COLLEGE OF LAGUNA',
            image: './images/UNION.PNG',
            description: '<span style="color: #009900;">👨‍🏫<b>Teacher Education:<b></span> <ul><li>Bachelor of Elementary Education </li><li>Bachelor of Secondary Education</li></ul><span style="color: #cc5200;"><b>👨‍💼👩‍💼BUSINESS:<b></span><b> <ul><li>AB in Economics</li><li>BS in Accountancy</li><li>BS in Commerce</li></ul><span style="color: #78a5de;"><b> 👨‍💻COMPUTER STUDIES:<b></span><b>  <ul><li>BS in Computer Engineering</li><li>BS in Computer Science</li><li>BS in Information Technology</li></ul><span style="color: #cc5200;"><b> 👨‍💼👩‍💼ADMINISTRATION:<b></span><b>  <ul><li>BS in Secretarian Administration</li></ul><span style="color: #1a0900;"><b>👮‍♀️👮‍♂️SOCIAL SCIENCE:<b></span><b> <ul><li>AB in Political Science</li><li>BS in Criminology</li></ul><span style="color: #C09F16;"><b>👨‍🔧ENGINEERING:<b></span><ul><li>BS in Computer Engineering</li></ul><span style="color: #912d2d;"><b> 👨‍💼HUMANITIES:<b></span><b> <ul><li>AB in History</li></ul><span style="color: #99ff99;"><b>📚LANGUAGE:<b></span><b> <ul><li>AB in English</li></ul> <span style="color: #DDA0DD;">🧮SCIENCE:</span> <ul><li>AB in Mathematics</li></ul><span style="color:  #00e6e6;"><b> 👩‍🍳TOURISM,HOSPITALITY & CULINARY:<b></span><b> <ul><li>BS in and Restaurant Management</li></ul></a> Facebook:<a href="https://www.facebook.com/phinmaucl/">/phinmaucl/</a>',      
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
            description: '<span style="color:  #ff6666;"><b>👩‍🔬ARTS AND SCIENCES:<b></span><b> <ul><li>Bachelor of Arts in Broadcasting</li><li>BS in Biology</li><li>BS in Chemistry</li></li><li>BS in Mathematics</li></li><li>BS in Psychology</li></ul><span style="color: #cc5200;">👨‍💼BUSINESS,ADMINISTRATION AND ACCOUNTANCY:<b></span><b> <ul><li>BS in office Adminstration</li><li>BS in Entrepreneurship</li><li>BS in Accountancy</li><li>Master of Public Administration</li></ul> <span style="color: #78a5de;"><b>👨‍💻COMPUTER STUDIES:<b></span> <b> <ul><li>BS in Information Technology</li><li>BS in Computer Science</li><li>Master in Information Technology</li></ul><span style="color: #1a0900;">👮‍♀️<b>CRIMINAL JUSTICE EDUCATION:<b></span> <ul><li>BS in Criminology</li></ul> <span style="#C09F16: blue;">👷‍♂️<b>ENGINEERING:<b></span> <ul><li>BS in Electronics Engineering</li><li>BS in Mechanical Engineering</li><li>BS in Electrical Engineering</li></li><li>BS in Civil Engineering</li></li><li>BS in Computer Engineering</li></ul><span style="color: #00e6e6;">👨‍⚕️👩‍⚕️<b>HOSPITALITY MANAGEMENT AND TOURISM:<b></span> <ul><li>BS in Hospitality</li><li>BS in Tourism Management</li> <span style="color:  #78a5de;">👨‍🔧<b>INDUSTRIAL TECHNOLOGY:<b></span> <ul><li>BS in Industrial Technology</li></ul> <span style="color:  #1a0900;">📚<b>LAW:<b></span> <ul><li>Juris Doctor</li></ul> <span style="color: #00e6e6;">👩‍⚕️👨‍⚕️<b>NURSING AND ALLIED HEALTH:<b></span> <ul><li>BS in Science in Nursing</li></ul> <span style="color:  #009900;">👨‍🏫<b>TEACHER EDUCATION:<b></span> <ul><li>Bachelor of Secondary Education</li><li>Bachelor of Elementary Education</li><li>Bachelor of Technical Vocational Teacher Education</li><li>Bachelor of Physical Education</li><li>Bachelor of Technology and livelihood Education</li><li>Bachelor of Technical Vocational Teacher Education</li><li>Doctor of Education</li><li>Master of Arts in Teaching English</li><li>Master of Arts in Education/li></ul> Facebook:<a href="https://www.facebook.com/LSPUSCCRegistrar/">/LSPUSCCRegistrar/',
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

