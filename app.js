import './app.scss';

window.goMonth = function (value){
	if ( value !== '' ) {
		document.querySelector('#'+value).scrollIntoView(true);
	}
}