   
CREATE TABLE IF NOT EXISTS employees(
                user_id SERIAL PRIMARY KEY NOT NULL,
                fname VARCHAR (80) NOT NULL,
                lname VARCHAR (80) NOT NULL,
                email VARCHAR(80) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL,
                gender VARCHAR (24) NOT NULL,  
                job_role VARCHAR(80) NOT NULL,
                department VARCHAR(80) NOT NULL,
				address VARCHAR(120) NOT NULL
                
);    
CREATE TABLE IF NOT EXISTS users(
                user_id SERIAL PRIMARY KEY NOT NULL,
                fname VARCHAR (80) NOT NULL,
                lname VARCHAR (80) NOT NULL,
                othername VARCHAR (80),
                email VARCHAR(80) NOT NULL UNIQUE,
                phone VARCHAR (24) NOT NULL,  
                password VARCHAR(255) NOT NULL,
                passUrl VARCHAR(255) NOT NULL
                
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
	REFERENCES employees (user_id);

CREATE TABLE article (
	article_id SERIAL PRIMARY KEY NOT NULL,
	title varchar(50)NOT NULL,
	article varchar(10485760) NOT NULL,
	date_created timestamp,
	authorid bigint
	);

ALTER TABLE article
	ADD FOREIGN KEY (authorid) 
	REFERENCES employees (user_id);

CREATE TABLE comment (
	commentid serial NOT NULL,
	"comment" varchar(103000),
	authorid bigint,
	article_id bigint,
	gifid bigint,
	date_created timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	PRIMARY KEY (commentid)
);

ALTER TABLE comment
	ADD FOREIGN KEY (authorid) 
	REFERENCES employees (user_id);

ALTER TABLE comment
	ADD FOREIGN KEY (article_id) 
	REFERENCES article (article_id);

ALTER TABLE comment
	ADD FOREIGN KEY (gifid) 
	REFERENCES gif (gifid);
