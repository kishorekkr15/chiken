# chiken means knowledge in japanese
# ===========================================================================================================
New project setup react
npm i react-router-dom
# ===========================================================================================================

# to use the slice outside the component like interceptors
# need to import store and logout slice. "dispatch" can be used directly
 store.dispatch(logoutSuccess())
# or
const { dispatch } = store;
dispatch(logoutSuccess())
# ===========================================================================================================
# Prevent typing certain characters in number input
onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}

# Prevent increment and decrement of number while scrolling
onWheelCapture={e => { e.target.blur() }}

# Time input icon color change
input[type="time"]::-webkit-calendar-picker-indicator {
  filter: invert(100%)
}
# ===========================================================================================================

# Changing favicon dynamically

	useEffect(() => {
		let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement | null;
		if (!link) {
			link = document.createElement('link');
			link.rel = 'icon';
			document.getElementsByTagName('head')[0].appendChild(link);
		}
		link.href = details.favicon;
	}, [details]);
# ===========================================================================================================

# tailwind css setup

# terminal
npm install -D tailwindcss postcss autoprefixer

# Tailwind CSS is used for development (to build the final CSS for production), it's generally best to install it as a development dependency using -D to avoid unnecessary packages in production.

# npm install --save-dev (or -D),
________________________________________________________
npx tailwindcss init

# This initializes a new Tailwind CSS configuration file (tailwind.config.js) in your project root. This file allows you to customize your Tailwind setup, such as adding custom colors, spacing, etc
________________________________________________________
# postcss.config.js
  module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}

________________________________________________________
# tailwind.config.js
content: ["./src/**/*.{js,jsx,ts,tsx}",]

# Without the content option, Tailwind won't know which files to scan for used classes, leading to either an empty or bloated CSS file.
________________________________________________________

# index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

________________________________________________________
# restart again
npm start

# ===========================================================================================================
# ===========================================================================================================
# ===========================================================================================================

# [eslint] Delete `CR` [prettier/prettier]
# upon this error add the rules

.eslintrc.js

module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {'prettier/prettier': ['error', {endOfLine: 'auto'}]},
}

# ===========================================================================================================

# to pass data via link

<Link 
	to = "specificpage"
	state = {data}
/>

# in  specific page
const location = useLocation()
const data = location.state

# ===========================================================================================================

# convert text input into time input onfocus

					<input
                        className="expires_time"
                        type="text"
                        onChange={(e) => handleChange(e.target.value, "end_time")}
                        value={createTip?.end_time}
                        placeholder="- end time -"
                        onFocus={(e) => e.target.type = 'time'}
                        onBlur={(e) => {
                          e.target.type = 'text'
                          handleChange(hour12Format(e.target.value), "end_time")
                        }}
                      />

# ===========================================================================================================
# change specific row color change in muidatatable
  const options = {
    filterType: "checkbox",
    selectableRows: "none",
    viewColumns: false,
    setRowProps: (row, dataIndex, rowIndex) => {
      console.log(row, "nitttrror")
      if ((active === 4) && (row[9] === true)) {
        return {
          style: { backgroundColor: "#ffffff" }
        };
      }
      return {};
    }
  };

# ===========================================================================================================
# issue faced for font awesome render issue- font family need applied to only for body instead of all element
  *{
    font-family:"sans seriff"
  }

* universal selector - applies to all element

 body{
    font-family:"sans seriff"
  }

  body - applies to body tags element


# ===========================================================================================================
# line break \n 

message.replace(/\\n/g, '\n')

That \n line feed appears literally means that it was escaped at some point, it is \\n in fact

# ===========================================================================================================

react-native-image-crop-picker [error: user did not grant library permission.] site:stackoverflow.com

<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" android:maxSdkVersion="29" tools:replace="android:maxSdkVersion" android:requestLegacyExternalStorage="true"/>

RNFS Download issue in older mobiles
<application android:requestLegacyExternalStorage="true">


# ===========================================================================================================

# redis setup in windows

wsl --install
________________________________________________________
Enable Required Features

Open Control Panel > Programs > Turn Windows features on or off.
Ensure the following features are enabled:
Windows Subsystem for Linux
Virtual Machine Platform
Click OK and restart your system if prompted.
________________________________________________________
# open ubuntu

curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg

echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list

sudo apt-get update
sudo apt-get install redis
sudo service redis-server start

# to check
redis-cli
127.0.0.1:6379> ping
PONG

________________________________________________________

Redis, short for Remote Dictionary Server
________________________________________________________
# setting expiry time in set method

await redisclient.set(email_id, OTP, { EX: 10 });
# ===========================================================================================================
# joi-objectid

const joiObjectId = require("joi-objectid")(Joi);

tenant_id: joiObjectId().required(),

# ===========================================================================================================
# findOne vs find aggregation
$findone - returns only one data that matches first
$find - returns find all documents that matches 

# ===========================================================================================================
# filter in aggregation
# remove unwanted data like empty objects
[
  my_arr:[
    {
      id: ObjectId('618f7ef057c2923be10d1111')
      //other stuff
    },
    {},
    {},
  ]
]




{
  "$project": {
    "my_arr": {
      "$filter": {
        "input": "$my_arr",
        "as": "a",
        "cond": {
          "$ne": [
            "$$a",
            {}
          ]
        }
      }
    }
  }
}

# ===========================================================================================================
# dangerouslyinnerhtml overflow issue fixed

wordwrap break-word
  <!-- 
  <div className="content_div_parent"
      dangerouslySetInnerHTML={{ __html: data }}
      style={{ color: "white !important", whiteSpace: "normal", wordWrap: 'break-word' }}
  > 
  -->
# ===========================================================================================================

tags is arrayOfObjects in mongoCollection  - jsondata is array of strings

        let match_obj={}
      match_obj.forum_type="question"
      match_obj.status="active"
      if (jsonData.tags) {
          match_obj["tags.tag_name"] = { $in: jsonData.tags };
      }

# ===========================================================================================================
# remove data from one array with reference to another array
let a = ['a', 'b', 'c'];
let b = ['a', 'c'];

a = a.filter(item => !b.includes(item));

console.log(a); // Output: ['b']


# ===========================================================================================================
forgot password

1. email check -> generate otp -> encrypt and store
2. otp verification
3. change password
# ===========================================================================================================
# Generating random password

export const generate_random_password = () => {
    let a = 'abcdefghijklmnopqrstuvwxyz'
    let b = '1234567890'
    let c = '@#$%&*+?!'
    let f = (x, y, t) => {
        let h = ''
        for (let i = 0; i < x; i++) h += t.charAt(Math.floor(Math.random() * y))
        return h
    }
    return f(3, 25, a) + f(1, 8, c) + f(3, 9, b) + f(3, 25, a)
}

# ===========================================================================================================
git user find and change

git config --list
git config --global user.name "kishorekumar"
git config --global user.email "kishorekumar.s@quantzi.in"

# ===========================================================================================================
# app.use

1. For example: app.use('/apple', ...) will match “/apple”, “/apple/images”, “/apple/images/news”, and so on.
2. path defaults to “/”, middleware mounted without a path will be executed for every request to the app.
3. Error-handling middleware always takes four arguments.
   You must provide four arguments to identify it as an error-handling middleware function.
   Even if you don’t need to use the next object, you must specify it to maintain the signature. 
   Otherwise, the next object will be interpreted as regular middleware and will fail to handle errors.   


# ===========================================================================================================
# unique file name

      const file_extension = req.file.originalname.split('.').pop()
      const file_name = req.file.originalname.split('.').slice(0, -1).join('.')
      const dateTime = moment(new Date()).format("DD-MM-yyyy-hh-mm-ss")
      const unique_file_name = file_name + dateTime + "." + file_extension
# ===========================================================================================================
# redirecting to secret url

document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.key === '/') {
      event.preventDefault();
      const baseDomain = window.location.origin;
      const newUrl = `${baseDomain}/test`;
      window.location.href = newUrl;
    }
  })

# ===========================================================================================================
# sending object in query in postman
https://medium.com/raml-api/objects-in-query-params-173d2712ce5b

filter_by={
  task_title:"create test_update_many"
}

{{q_admin_url}}/common/fields?module_code=project_tasks&filter_by[task_title]=create test_update_many

# ===========================================================================================================
# passing props from parent to child
<component {...data}/>          //directly accessing
<component data={data}/>        //assign to another variable

# ===========================================================================================================
# axios error
1. cors test in browser
2. check with other browsers
3. check the port - must not be 6000
# ===========================================================================================================
# change select color in chrome backgroundColor and color
::selection{
  backgroundColor:"red",
  color:"#fff"
}

# ===========================================================================================================

rerender

Re-renders only affect the component that owns the state + its descendants (if any). 
React's “main job” is to keep the application UI in sync with the React state. The point of a re-render is to figure out what needs to change.
Each render is a snapshot, like a photo taken by a camera, that shows what the UI should look like, based on the current application state.

In an ideal world, React components would always be “pure”. A pure component is one that always produces the same UI when given the same props.

# ===========================================================================================================
# Multi Domain Setup In local

Navigate to the Hosts File: Type the path C:\Windows\System32\Drivers\etc\hosts in the "File name" field. 
Add or Modify the Entry: Under the existing entries, add a line with the format: IP_ADDRESS domain_name. For example, 127.0.0.1 example.local. 
Save the Changes: Go to "File" > "Save". 


for example

127.0.0.1   www.tenantone.local
127.0.0.1   www.tenanttwo.local

we can access the website in http://www.tenantone.local:3001/

# ===========================================================================================================
