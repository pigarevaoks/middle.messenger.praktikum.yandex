export const profileInputTemplate = () => `
   <div class="profileInput">
	 	<div class="profileInput__field">
		 <label for={{name}} class="profileInput__label">{{label}}</label>
		 {{#if disabled}}
		 <input
			class="profileInput__input"
			id={{name}}
			value={{value}}
			placeholder={{placeholder}}
			type={{type}}
			disabled={{disabled}}
		>
		{{else}}
		<input
		 	class="profileInput__input"
			id={{name}}
			value={{value}}
			placeholder={{placeholder}}
			type={{type}}
			required={{required}}	
		 >
		{{/if}}
		</div>
	 	<div class="input__error">{{error}}</div>
	 </div>
    `
