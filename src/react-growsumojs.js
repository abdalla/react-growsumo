export const initialize = (key,cb) => {
	const gs = document.createElement('script');
	gs.src = 'https://snippet.growsumo.com/growsumo.min.js';
	gs.type = 'text/javascript';
	gs.async = 'true';
	gs.onload = gs.onreadystatechange = function() {
		const rs = this.readyState;
		if (rs && rs !== 'complete' && rs !== 'loaded') {
			return;
		}

		try {
			growsumo._initialize(key);
			if (typeof growsumoInit === 'function') {
				growsumoInit();
			}
			if(cb)
            {
                cb();
            }
		} catch (e) {}
	};
	const s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(gs, s);
};

export const setUserInfo = ({ name, email, customerKey }) => {
	growsumo.data.name = name;
	growsumo.data.email = email;
	growsumo.data.customer_key = customerKey;
};

export const createSignup = (callback) => {
	growsumo.createSignup(callback);
};

