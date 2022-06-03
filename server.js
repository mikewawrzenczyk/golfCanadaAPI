const express = require('express')
const app = express()
const PORT = 8000

const golfCourse = {
    'knollwood old' :{
        "club_id": "CAN-ON-00001",
        "club_name": "Knollwood Golf Club Old Course",
        "club_membership": "Public",
        "number_of_holes": "18",
        "address": "3651 O'Malley Rd",
        "city": "Anchorage",
        "state": "Alaska",
        "country": "United States of America",
        "postal_code": "99507",
        "phone": "(907) 522-3363",
        "fax": "(907) 349-6640",
        "website": "www.anchoragegolfcourse.com",
        "contact_name": "Rich Sayers",
        "contact_title": "General Manager",
        "email_address": "rich@anchoragegolfcourse.com",
        "driving_range": "Yes",
        "putting_green": "Yes",
        "chipping_green": "No",
        "practice_bunker": "No",
        "motor_cart": "Yes",
        "pull_cart": "Yes",
        "golf_clubs_rental": "Yes",
        "club_fitting": "Yes",
        "pro_shop": "Yes",
        "golf_lessons": "Yes",
        "caddie_hire": "No",
        "restaurant": "Yes",
        "reception_hall": "No",
        "changing_room": "Yes",
        "lockers": "No",
        "lodging_on_site": "No",
        "last_update": "0000-00-00"
    },
    'knollwood new' :{
        "club_id": "CAN-ON-00002",
        "club_name": "Knollwood Golf Club Old New Course",
        "club_membership": "Public",
        "number_of_holes": "18",
        "address": "3651 O'Malley Rd",
        "city": "Anchorage",
        "state": "Alaska",
        "country": "United States of America",
        "postal_code": "99507",
        "phone": "(907) 522-3363",
        "fax": "(907) 349-6640",
        "website": "www.anchoragegolfcourse.com",
        "contact_name": "Rich Sayers",
        "contact_title": "General Manager",
        "email_address": "rich@anchoragegolfcourse.com",
        "driving_range": "Yes",
        "putting_green": "Yes",
        "chipping_green": "No",
        "practice_bunker": "No",
        "motor_cart": "Yes",
        "pull_cart": "Yes",
        "golf_clubs_rental": "Yes",
        "club_fitting": "Yes",
        "pro_shop": "Yes",
        "golf_lessons": "Yes",
        "caddie_hire": "No",
        "restaurant": "Yes",
        "reception_hall": "No",
        "changing_room": "Yes",
        "lockers": "No",
        "lodging_on_site": "No",
        "last_update": "0000-00-00"
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
    if(golfCourse[courseName]){
        response.json(golfCourse[courseName])
    }
    else{
        response.json(golfCourse['unknown'])
    }
})

app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}`)
})