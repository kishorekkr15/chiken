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
npm i -D tailwindcss
npx tailwindcss init

# tailwind.config.js
content: ["./src/**/*.{js,jsx,ts,tsx}",]

# index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

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
