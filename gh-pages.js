import { publish } from 'gh-pages';

const token = process.env.MY_PORTFOLIO_GH_PAGES;

publish(
	'build', // path to public directory
	{
		branch: 'gh-pages',
		repo: `https://${token}@github.com/LeonardoBevilacqua/MyPortfolio.git`,
		user: {
			name: 'Leonardo Bevilacqua',
			email: 'leonardo_bevilacqua@hotmail.com'
		},
		dotfiles: true
	},
	(err) => {
		if (err) {
			console.error(err);
			return;
		}
		console.log('Deploy Complete!');
	}
);
