-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Nov 27, 2021 at 03:59 AM
-- Server version: 5.7.34
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_noteworthy`
--

CREATE TABLE `tbl_noteworthy` (
  `ID` int(11) NOT NULL,
  `Noteworthy` varchar(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_noteworthy`
--

INSERT INTO `tbl_noteworthy` (`ID`, `Noteworthy`) VALUES
(1, 'true'),
(2, 'false');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_projects`
--

CREATE TABLE `tbl_projects` (
  `ID` int(11) NOT NULL,
  `Title` varchar(80) NOT NULL,
  `Date` year(4) NOT NULL,
  `Github` text,
  `Live` text,
  `Behance` text,
  `Desc1` text NOT NULL,
  `Desc2` text NOT NULL,
  `Desc3` text,
  `Desc4` text,
  `Image1` varchar(100) NOT NULL,
  `Image2` varchar(100) NOT NULL,
  `Image3` varchar(100) DEFAULT NULL,
  `Image4` varchar(100) DEFAULT NULL,
  `Image5` varchar(100) DEFAULT NULL,
  `video` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_projects`
--

INSERT INTO `tbl_projects` (`ID`, `Title`, `Date`, `Github`, `Live`, `Behance`, `Desc1`, `Desc2`, `Desc3`, `Desc4`, `Image1`, `Image2`, `Image3`, `Image4`, `Image5`, `video`) VALUES
(1, 'Astê Clothing', 2020, NULL, NULL, 'https://www.behance.net/gallery/109364639/Aste', 'Astê is an online store for women’s underwear. Their goal today is to show their customers how important it is to wear a comfortable and quality garment that makes them feel self-confident and beautiful.', 'The brand was designed for middle-class women, always looking to feel good and improve self-esteem.', 'For the logo, a typography with a light serif was chosen, which conveys elegance and modernity. A heart was inserted between the S and the T in a negative space, which brings even more personality to the brand, representing self-confidence and self-esteem.\r\n', 'The logo translates in a clean and minimalist way everything that the brand represents: elegance, modernity, simplicity, and self-confidence.', 'aste_1.jpg', 'aste_2.jpg', 'aste_3.jpg', 'aste_4.jpg', 'aste_5.jpg', NULL),
(2, 'Mini Canada App', 2021, 'https://github.com/eduardoschlichting/schlichting_e_mini_app', NULL, NULL, 'The Mini App is a website that allows users to get to know more about the Mini Canada lineup, financing, and leasing possibilities.\r\n\r\nThe project\'s main goal was to explore the Mini Website and how data flows in Vue.js. All the data was retrieved using the Fetch API from a MySql Database.', '', 'Making use of best practices in JavaScript and Vue.Js such as components and modularization, the App functionality was built so it allows the user to see all data related to each car when clicking in one of their thumbnails.\r\n\r\nEach click retrieves the data related to each car, coming from a MySql database in the back-end. The data is then filtered and organized to be presented adequately on the client side.', NULL, 'mini_1.png', 'mini_2.png', 'mini_3.png', 'mini_4.png', 'mini_5.png', NULL),
(3, 'Tide Beer', 2020, 'https://github.com/eduardoschlichting/schlichting_e_tide', 'https://eduardoschlichting.github.io/schlichting_e_tide/', NULL, 'This is an HTML, CSS, and JavaScript-based project done for the Final Integrated Project of the Interactive Media Design program at Fanshawe College. Built with the latest technologies and best practices in web design, all the visuals, code, and functionality were built by me from scratch!', 'Our challenge was to build some interactivity with JS, including but not limited to: micro-interactions, UI designs, animations, and the main task: store some data in an array and retrieve it somewhere on the page (this functionality can be seen in the \'How to Use\' page).', 'Design-wise, the challenge was to create a brand mashup between a random product and a beer brand. My given ones were Tide, the detergent, and Pilsner Urquell.\r\n\r\nMy solution was to keep Tide\'s brand name and personality, with all the visual communication of Pilsner Urquell. I used Pilsner Urquell\'s website as the main inspiration.', 'The logo, visual elements as the backgrounds, headers. videos, and promo images were built from scratch, using Photoshop, Illustrator, After Effects, and Cinema 4D.\r\n\r\nIn the UX/UI portion of the project, my main goal was to bring a simple, yet effective and easy-to-navigate website. The result was achieved using large headers, blocks, and a sans-serif typography.\r\n\r\nThe final result is a well-built website that engages its users to consume and bring Tide to their houses.', 'tide_1.png', 'tide_2.png', 'tide_3.png', 'tide_4.png', NULL, 'tide_5.mp4'),
(4, 'Favorite Things', 2021, 'https://github.com/eduardoschlichting/schlichting_e_myFavouriteThings', 'https://eduardoschlichting.github.io/schlichting_e_myFavouriteThings/', NULL, 'This is an HTML, CSS, and JavaScript-based project done as a practice to use AJAX and fetch calls to retrieve data from a JSON file.\r\n\r\nThe Web App highlights some of my favorite hobbies, such as designing stuff, reading stuff, and gaming a little bit!\r\n\r\nHave fun getting to know a bit more about me, bud :D', '', NULL, NULL, 'fav_1.png', 'fav_2.png', '', NULL, NULL, NULL),
(5, 'Kavorka', 2021, NULL, NULL, NULL, '“Kavorka”, from the Latvian “The lure of the animal”, means to be irresistible, strong, independent, but also sophisticated. Kavorka wants to be the brand that breaks the common, being disruptive, bringing innovation and confidence to those who see and use it.\r\nAll this power from the brand is represented with two “K’s”, reflecting the strong sound that the syllables “ka” have when pronouncing Kavorka.\r\nThe purpose of Kavorka is exactly what the name sounds to people when they hear it: bring extraordinary cosmetics with a force that exhales independence, strength, temptation.', 'Every color can cause a different emotion in a person, that’s why it needs to be chosen wisely. At Kavorka, we want to communicate and make our audience feel powerful, fulfilled, unique.\r\nBlack, red, and orange tones are our mark in the world. These colors together have a strong voice, expressing all the personality of Kavorka at once.\r\nOur gradient is the main form of communication. It shows how women can be whoever they want to be, with confidence and power.', NULL, NULL, 'kavorka_1.png', 'kavorka_2.png', 'kavorka_3.png', 'kavorka_4.png', 'kavorka_5.png', 'kavorka_5.mp4'),
(6, 'Motion Reel 2021', 2021, NULL, NULL, NULL, 'A project that compiles all of my motion, video, and 3D work in 2021. Enjoy! :D', '', NULL, NULL, 'motion_1.jpg', 'motion_2.png', 'motion_3.png', 'motion_4.png', '', 'reel.mp4');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_projects_tags`
--

CREATE TABLE `tbl_projects_tags` (
  `ID` int(11) NOT NULL,
  `Project_ID` int(11) NOT NULL,
  `Tag_ID` int(11) NOT NULL,
  `Note_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_projects_tags`
--

INSERT INTO `tbl_projects_tags` (`ID`, `Project_ID`, `Tag_ID`, `Note_ID`) VALUES
(1, 1, 9, 2),
(2, 1, 13, 2),
(3, 2, 3, 2),
(4, 2, 4, 2),
(5, 2, 8, 2),
(6, 3, 2, 2),
(7, 3, 3, 2),
(8, 3, 12, 2),
(9, 3, 13, 2),
(10, 4, 1, 2),
(11, 4, 2, 2),
(12, 4, 3, 2),
(13, 5, 9, 2),
(14, 5, 13, 2),
(15, 6, 9, 2),
(16, 6, 10, 2),
(17, 6, 11, 2);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_tags`
--

CREATE TABLE `tbl_tags` (
  `ID` int(11) NOT NULL,
  `Tag` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_tags`
--

INSERT INTO `tbl_tags` (`ID`, `Tag`) VALUES
(1, 'HTML'),
(2, 'SASS'),
(3, 'JavaScript'),
(4, 'Vue.js'),
(5, 'Ajax'),
(7, 'PHP'),
(8, 'MySql'),
(9, 'Design'),
(10, 'Motion Design'),
(11, '3D'),
(12, 'UX/UI'),
(13, 'Branding');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_noteworthy`
--
ALTER TABLE `tbl_noteworthy`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tbl_projects`
--
ALTER TABLE `tbl_projects`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tbl_projects_tags`
--
ALTER TABLE `tbl_projects_tags`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tbl_tags`
--
ALTER TABLE `tbl_tags`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_noteworthy`
--
ALTER TABLE `tbl_noteworthy`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_projects`
--
ALTER TABLE `tbl_projects`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tbl_projects_tags`
--
ALTER TABLE `tbl_projects_tags`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `tbl_tags`
--
ALTER TABLE `tbl_tags`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
