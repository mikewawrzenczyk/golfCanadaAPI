const express = require('express')
const app = express()
const PORT = 8000

const golfCourse = {
    'knollwood old' :{
        "club_id": "CAN-ON-00001",
        "club_name": "Knollwood Golf Club Old Course",
        "club_membership": "Public",
        "number_of_holes": "18",
        "address": "1276 Shaver Road",
        "city": "Ancaster",
        "province": "Ontario",
        "country": "Canada",
        "postal_code": "L9G 3L1",
        "phone": "905 648 6687",
        "fax": "unknown",
        "website": "https://www.knollwoodgolfclub.com",
        "contact_name": "Nadia Clarke",
        "contact_title": "General Manager",
        "email_address": "unknown",
        "driving_range": "No",
        "putting_green": "Yes",
        "chipping_green": "No",
        "practice_bunker": "No",
        "motor_cart": "Yes",
        "pull_cart": "Yes",
        "golf_clubs_rental": "Yes",
        "club_fitting": "No",
        "pro_shop": "Yes",
        "golf_lessons": "Yes",
        "caddie_hire": "No",
        "restaurant": "Yes",
        "reception_hall": "Yes",
        "changing_room": "Yes",
        "lockers": "No",
        "lodging_on_site": "No",
        "last_update": "2022-05-06"
    },
    'knollwood new' :{
        "club_id": "CAN-ON-00002",
        "club_name": "Knollwood Golf Club Old New Course",
        "club_membership": "Public",
        "number_of_holes": "18",
        "address": "914 Book Road West",
        "city": "Ancaster",
        "province": "Ontario",
        "country": "Canada",
        "postal_code": "L9G 3L1",
        "phone": "905 648 6687",
        "fax": "unknown",
        "website": "https://www.knollwoodgolfclub.com",
        "contact_name": "Nadia Clarke",
        "contact_title": "General Manager",
        "email_address": "unknown",
        "driving_range": "No",
        "putting_green": "Yes",
        "chipping_green": "No",
        "practice_bunker": "No",
        "motor_cart": "Yes",
        "pull_cart": "Yes",
        "golf_clubs_rental": "Yes",
        "club_fitting": "No",
        "pro_shop": "Yes",
        "golf_lessons": "Yes",
        "caddie_hire": "No",
        "restaurant": "Yes",
        "reception_hall": "Yes",
        "changing_room": "Yes",
        "lockers": "No",
        "lodging_on_site": "No",
        "last_update": "2022-05-06"
    },
    'southbrook' :{
        "club_id": "CAN-ON-00003",
        "club_name": "Southbrook Golf & Country Club",
        "club_membership": "Public",
        "number_of_holes": "18",
        "address": "4349 Hamilton Regional Rd 56",
        "city": "Binbrook",
        "province": "Ontario",
        "country": "Canada",
        "postal_code": "L0R 1C0",
        "phone": "905 692 3592",
        "fax": "unknown",
        "website": "https://southbrookgolf.ca/",
        "contact_name": "Craig",
        "contact_title": "unknown",
        "email_address": "craig@southbrookgolf.ca",
        "driving_range": "Yes",
        "putting_green": "Yes",
        "chipping_green": "No",
        "practice_bunker": "No",
        "motor_cart": "Yes",
        "pull_cart": "Yes",
        "golf_clubs_rental": "Yes",
        "club_fitting": "No",
        "pro_shop": "Yes",
        "golf_lessons": "Yes",
        "caddie_hire": "No",
        "restaurant": "Yes",
        "reception_hall": "Yes",
        "changing_room": "Yes",
        "lockers": "No",
        "lodging_on_site": "No",
        "last_update": "2022-05-06"
    },
    'chippewa' :{
        "club_id": "CAN-ON-00004",
        "club_name": "Chippewa Creek Golf",
        "club_membership": "Public",
        "number_of_holes": "36",
        "address": "9639 Chippewa Rd W",
        "city": "Mount Hope",
        "province": "Ontario",
        "country": "Canada",
        "postal_code": "L0R 1W0",
        "phone": "905 679 4240",
        "fax": "unknown",
        "website": "https://www.chippewacreekgolf.com/index.html",
        "contact_name": "unknown",
        "contact_title": "unknown",
        "email_address": "hrchippewacreek@outlook.com",
        "driving_range": "Yes",
        "putting_green": "Yes",
        "chipping_green": "Yes",
        "practice_bunker": "Yes",
        "motor_cart": "Yes",
        "pull_cart": "Yes",
        "golf_clubs_rental": "Yes",
        "club_fitting": "No",
        "pro_shop": "Yes",
        "golf_lessons": "Yes",
        "caddie_hire": "No",
        "restaurant": "Yes",
        "reception_hall": "No",
        "changing_room": "Yes",
        "lockers": "No",
        "lodging_on_site": "No",
        "last_update": "2022-05-06"
    },
    
    'unknown':{
        "club_id": "unknown",
        "club_name": "Data now found",
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:club_name', (request, response) =>{
    // response.json(golfCourse)
    const courseName =  request.params.club_name.toLowerCase()
    // const clubName = golfCourse[courseName].club_name.toLowerCase()
    //check to see if courseName request param is a property of golfCourse
    if(golfCourse[courseName]){
        response.json(golfCourse[courseName])
    }
    else{
        response.json(golfCourse['unknown'])
    }
})
//for heroku we will use environment variable for port.
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}`)
})