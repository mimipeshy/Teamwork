CREATE TABLE employee (
	firstname varchar(50) NOT NULL,
	lastname varchar(50)  NOT NULL,
	email varchar(80)  NOT NULL UNIQUE,
	password varchar(255) NOT NULL,
	gender varchar(20)  NOT NULL,
	job_role varchar(50) NOT NULL,
	department varchar(50)NOT NULL,
	address varchar(80) NOT NULL,
	employeeid serial NOT NULL,
	PRIMARY KEY (employeeid)
);

CREATE TABLE gif (
	gifid serial NOT NULL,
	title varchar(50),
	image_url varchar(200),
	date_created date,
	authorid bigint,
	PRIMARY KEY (gifid)
);

ALTER TABLE gif
	ADD FOREIGN KEY (authorid) 
	REFERENCES employee (employeeid);

CREATE TABLE article (
	title varchar(50)NOT NULL,
	article varchar(10485760) NOT NULL,
	date_created timestamp,
	articleid serial NOT NULL,
	authorid bigint,
	PRIMARY KEY (articleid)
);

ALTER TABLE article
	ADD FOREIGN KEY (authorid) 
	REFERENCES employee (employeeid);

CREATE TABLE comment (
	commentid serial NOT NULL,
	"comment" varchar(103000),
	authorid bigint,
	articleid bigint,
	gifid bigint,
	date_created timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	PRIMARY KEY (commentid)
);

ALTER TABLE comment
	ADD FOREIGN KEY (authorid) 
	REFERENCES employee (employeeid);

ALTER TABLE comment
	ADD FOREIGN KEY (articleid) 
	REFERENCES article (articleid);

ALTER TABLE comment
	ADD FOREIGN KEY (gifid) 
	REFERENCES gif (gifid);
