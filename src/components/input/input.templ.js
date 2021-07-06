export const inputTemplate = `
   <div class="input">
	 	<div class="input__field">
		 <input
			type="text"
			class="input__input"
			id={{name}}
			type={{type}}
			required={{required}}
		 >
		 <label for={{name}} class="input__label">{{label}}</label>
		</div>
	 	<div class="input__error">{{error}}</div>
	 </div>
    `;
