export const profileInputTemplate = `
   <div class="profileInput">
	 	<div class="profileInput__field">
		 <label for={{name}} class="profileInput__label">{{label}}</label>
		 <input
			type="text"
			class="profileInput__input"
			id={{name}}
			value={{value}}
			type={{type}}
			required={{required}}
			disabled={{disabled}}
		 >
		</div>
	 	<div class="input__error">{{error}}</div>
	 </div>
    `;
