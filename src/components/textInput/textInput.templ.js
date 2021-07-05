export const TextInputTemplate = `
   <div class="textInput">
	 	<div class="textInput__field">
		 <input
			type="text"
			class="textInput__input"
			id={{name}}
			type={{type}}
			required={{required}}
		 >
		 <label for={{name}} class="textInput__label">{{label}}</label>
		</div>
	 	<div class="textInput__error">{{error}}</div>
	 </div>
    `;
