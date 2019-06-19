# Reminder

### Database setup

To create DataBase run this script in mysql console

```bash
create schema if not exists reminder;
use reminder;

create table users
(
	id int auto_increment
		primary key,
	name varchar(255) null,
	phone varchar(255) null
	email varchar(255) null
);

create table events
(
	id int auto_increment
		primary key,
	about varchar(255) null,
	remind_date datetime not null,
	event_date datetime not null,
	user_id int null,
	constraint events_ibfk_1
		foreign key (user_id) references users (id)
);

create index user_id
	on events (user_id);
```

