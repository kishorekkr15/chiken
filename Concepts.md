# chiken means knowledge
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