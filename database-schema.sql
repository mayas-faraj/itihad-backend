DROP DATABASE IF EXISTS itihad;
CREATE DATABASE itihad CHARACTER SET = 'utf8mb4';
CREATE USER IF NOT EXISTS itihad@localhost IDENTIFIED By '4piE-7h/m';
GRANT ALL PRIVILEGES ON itihad.* TO itihad@localhost WITH GRANT OPTION;
USE itihad;

CREATE TABLE user (
  id INT AUTO_INCREMENT,
  user_login VARCHAR(50) NOT NULL,
  user_name VARCHAR(50),
  email VARCHAR(50),
  password VARCHAR(50) NOT NULL,
  is_admin INT DEFAULT 0,
  is_disabled INT DEFAULT 0,
  created_on DATETIME default Now(),
  PRIMARY KEY (id),
  UNIQUE (user_login)
);

CREATE TABLE token (
  id INT AUTO_INCREMENT,
  user_id INT NOT NULL,
  value CHAR(36),
	created_on DATETIME default Now(),
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
);

CREATE TABLE locale (
	id CHAR(5),
	currency_symbol VARCHAR(10),
	currency_rate FLOAT DEFAULT 1,
	date_format VARCHAR(20),
	UNIQUE (currency_symbol),
	PRIMARY KEY (id)
);

CREATE TABLE country (
  id INT AUTO_INCREMENT,
  PRIMARY KEY (id)
);

CREATE TABLE locale_country (
  id INT AUTO_INCREMENT,
  country_id INT NOT NULL,
  locale_id CHAR(5) NOT NULL,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (country_id) REFERENCES country(id) ON DELETE CASCADE,
  FOREIGN KEY (locale_id) REFERENCES locale(id) ON DELETE CASCADE,
  UNIQUE (locale_id, country_id)
);

CREATE TABLE category (
  id INT AUTO_INCREMENT,
  slug VARCHAR(100) NOT NULL,
	img_src VARCHAR(255),
	img_alt VARCHAR(80),
  is_disabled INT DEFAULT 0,
  PRIMARY KEY (id),
  UNIQUE (slug)
);

CREATE TABLE locale_category (
  id INT AUTO_INCREMENT,
  category_id INT NOT NULL,
  locale_id CHAR(5) NOT NULL,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (category_id) REFERENCES category(id) ON DELETE CASCADE,
  FOREIGN KEY (locale_id) REFERENCES locale(id) ON DELETE CASCADE,
  UNIQUE (locale_id, category_id)
);

CREATE TABLE type (
  id INT AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE (name)
);

CREATE TABLE post (
	id INT AUTO_INCREMENT,
  category_id INT NOT NULL,
  type_id INT NOT NULL,
	slug VARCHAR(250) NOT NULL,
	description VARCHAR(1000),
  button_link VARCHAR(250),
	feature_image_src VARCHAR(250),
	feature_image_alt VARCHAR(220),
	og_image_src VARCHAR(250),
	created_on DATETIME default Now(),
  created_by INT NOT NULL,
  updated_by INT,
  read_count INT DEFAULT 0,
  is_disabled INT DEFAULT 0,
  display_order INT DEFAULT 0,
	PRIMARY KEY (id),
  FOREIGN KEY (category_id) REFERENCES category(id),
  FOREIGN KEY (type_id) REFERENCES type(id),
  FOREIGN KEY (created_by) REFERENCES user(id),
  FOREIGN KEY (updated_by) REFERENCES user(id),
	UNIQUE (slug)
);

CREATE TABLE locale_post (
  id INT AUTO_INCREMENT,
  post_id INT NOT NULL,
  locale_id CHAR(5) NOT NULL,
	title VARCHAR(200) NOT NULL,
  excerpt VARCHAR(1500),
  content text,
  button_text VARCHAR(100),
  PRIMARY KEY (id),
  FOREIGN KEY (post_id) REFERENCES post(id) ON DELETE CASCADE,
  FOREIGN KEY (locale_id) REFERENCES locale(id) ON DELETE CASCADE,
  UNIQUE (locale_id, post_id)
);

CREATE TABLE level (
  id INT AUTO_INCREMENT,
  PRIMARY KEY (id)
);

CREATE TABLE locale_level (
  id INT AUTO_INCREMENT,
  level_id INT NOT NULL,
  locale_id CHAR(5) NOT NULL,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (level_id) REFERENCES level(id) ON DELETE CASCADE,
  FOREIGN KEY (locale_id) REFERENCES locale(id) ON DELETE CASCADE,
  UNIQUE (locale_id, level_id)
);

CREATE TABLE classification (
  id INT AUTO_INCREMENT,
  PRIMARY KEY (id)
);

CREATE TABLE locale_classification (
  id INT AUTO_INCREMENT,
  classification_id INT NOT NULL,
  locale_id CHAR(5) NOT NULL,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (classification_id) REFERENCES classification(id) ON DELETE CASCADE,
  FOREIGN KEY (locale_id) REFERENCES locale(id) ON DELETE CASCADE,
  UNIQUE (locale_id, classification_id)
);


CREATE TABLE post_image (
	id INT AUTO_INCREMENT,
	img_src VARCHAR(255) NOT NULL,
	img_alt VARCHAR(80) NOT NULL,
	post_id INT,
	PRIMARY KEY (id),
	FOREIGN KEY (post_id) REFERENCES post (id) ON DELETE CASCADE
);

CREATE TABLE locale_post_image (
	id INT AUTO_INCREMENT,
	locale_id CHAR(5) NOT NULL,
	post_image_id INT NOT NULL,
	title VARCHAR(100),
	FOREIGN KEY (post_image_id) REFERENCES post_image(id) ON DELETE CASCADE,
	FOREIGN KEY (locale_id) REFERENCES locale(id) ON DELETE CASCADE,
	PRIMARY KEY (id),
  UNIQUE (locale_id, post_image_id)
);

CREATE TABLE event (
  post_id INT,
  started_on DATETIME,
  end_on DATETIME,
  PRIMARY KEY (post_id),
  FOREIGN KEY (post_id) REFERENCES post(id) ON DELETE CASCADE
);

CREATE TABLE activity (
  post_id INT,
  level_id INT NOT NULL,
  classification_id INT NOT NULL,
  started_on DATETIME,
  end_on DATETIME,
  PRIMARY KEY (post_id),
  FOREIGN KEY (post_id) REFERENCES post(id) ON DELETE CASCADE,
  FOREIGN KEY (classification_id) REFERENCES classification(id),
  FOREIGN KEY (level_id) REFERENCES level(id)
);

CREATE TABLE highlight (
  post_id INT,
  started_on DATETIME,
  end_on DATETIME,
  PRIMARY KEY (post_id),
  FOREIGN KEY (post_id) REFERENCES post(id) ON DELETE CASCADE
);

CREATE TABLE member (
	id INT AUTO_INCREMENT,
  tel VARCHAR(100),
  fax VARCHAR(100),
  email VARCHAR(100),
  website VARCHAR(255),
  address VARCHAR(500),
  country_id INT NOT NULL,
  image_src VARCHAR(255),
  is_disabled INT DEFAULT 0,
  display_order INT DEFAULT 0,
	FOREIGN KEY (country_id) REFERENCES country(id), 
	PRIMARY KEY (id)
);

CREATE TABLE locale_member (
	id INT AUTO_INCREMENT,
	locale_id CHAR(5) NOT NULL,
	member_id INT NOT NULL,
	name VARCHAR(100) NOT NULL,
  excerpt VARCHAR(2000),
  company VARCHAR(100),
  position VARCHAR(100), 
	FOREIGN KEY (member_id) REFERENCES member(id) ON DELETE CASCADE,
	FOREIGN KEY (locale_id) REFERENCES locale(id) ON DELETE CASCADE, 
	PRIMARY KEY (id),
  UNIQUE (locale_id, member_id)
);

CREATE TABLE company (
	id INT AUTO_INCREMENT,
  tel VARCHAR(100),
  fax VARCHAR(100),
  email VARCHAR(100),
  website VARCHAR(255),
  address VARCHAR(500),
  country_id INT NOT NULL,
  logo_src VARCHAR(255),
  is_disabled INT DEFAULT 0,
  display_order INT DEFAULT 0,
	FOREIGN KEY (country_id) REFERENCES country(id), 
	PRIMARY KEY (id)
);

CREATE TABLE locale_company (
	id INT AUTO_INCREMENT,
	locale_id CHAR(5) NOT NULL,
	company_id INT NOT NULL,
	name VARCHAR(100) NOT NULL,
  excerpt VARCHAR(2000),
  representer VARCHAR(100), 
	FOREIGN KEY (company_id) REFERENCES company(id) ON DELETE CASCADE,
	FOREIGN KEY (locale_id) REFERENCES locale(id) ON DELETE CASCADE,
	PRIMARY KEY (id),
  UNIQUE (locale_id, company_id)
);

CREATE TABLE menu (
	id INT AUTO_INCREMENT,
	name VARCHAR(100) NOT NULL,
	PRIMARY KEY (id),
	UNIQUE (name)
);

CREATE TABLE menu_item (
	id INT AUTO_INCREMENT,
	parent_id INT,
	menu_id INT NOT NULL,
	post_id INT,
	icon VARCHAR(300),
	item_order INT DEFAULT 0,
	PRIMARY KEY (id),
	FOREIGN KEY (parent_id) REFERENCES menu_item(id) ON DELETE CASCADE,
	FOREIGN KEY (menu_id) REFERENCES menu(id) ON DELETE CASCADE,
	FOREIGN KEY (post_id) REFERENCES post(id) ON DELETE CASCADE
);

CREATE TABLE locale_menu_item (
  id INT AUTO_INCREMENT,
  menu_item_id INT NOT NULL,
  locale_id CHAR(5) NOT NULL,
	title VARCHAR(200) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (menu_item_id) REFERENCES menu_item(id) ON DELETE CASCADE,
  FOREIGN KEY (locale_id) REFERENCES locale(id) ON DELETE CASCADE,
  UNIQUE (locale_id, menu_item_id)
);

CREATE TABLE contact (
	id INT AUTO_INCREMENT,
	name VARCHAR(200),
	icon VARCHAR(100),
	link VARCHAR(250),
	is_social INT DEFAULT 0,
	PRIMARY KEY (id),
  UNIQUE (name)
);

CREATE TABLE messages (
	id INT AUTO_INCREMENT,
	name VARCHAR(200),
	email VARCHAR(80),
	phone VARCHAR(30),
	message TEXT,
	sent_on DATETIME default Now(),
	PRIMARY KEY (id)
);

CREATE TABLE setting (
	id INT AUTO_INCREMENT,
  user_id INT,
	name VARCHAR(200),
	value TEXT,
	PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES user(id) ON UPDATE CASCADE ON DELETE CASCADE,
	UNIQUE (name)

);
