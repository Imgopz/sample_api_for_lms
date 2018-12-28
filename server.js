const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const database  = {
	users:[{
		id: '1',
		name: 'Gopal',
		email: 'g@gmail.com',
	username: 'gopal09'},
	{
		id: '2',
		name: 'Krishna',
		email: 'k@gmail.com',
		username: 'krishna09'}
	]
}

const database1  = {
	leaves:[{
		name: 'Gopal',
		leavetype: 'Earned Leave',
		lfrom: '2019-12-12',
		lto: '2019-12-27'},
	{
		name: 'Krishnan',
		leavetype: 'Earned Leave',
		lfrom: '2019-01-12',
		lto: '2019-01-27'}
	]
}

app.get('/', (req, res) => {
	res.send(database.users)
})


app.post('/addemployee', (req, res) => {
	const { id, name, email, username } = req.body;
	database.users.push({
		id: id,
		name: name,
		email: email,
		username: username
	})
	res.json(database.users[database.users.length-1])
})

app.post('/addleave', (req, res) => {
	const { name, leavetype, lfrom, lto } = req.body;
	database1.leaves.push({
		name: name,
		leavetype: leavetype,
		lfrom: lfrom,
		lto: lto
	})
	res.json(database1.leaves[database1.leaves.length-1])
})

app.get('/employees', (req, res) => {
	res.json(database.users)
})


app.get('/leaves', (req, res) => {
	res.json(database1.leaves)
})


app.listen(3000, () => {
	console.log('app is running on port 3000');
})