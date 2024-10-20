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
