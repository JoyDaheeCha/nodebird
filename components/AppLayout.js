import PropTypes from 'prop-types';
import Link from 'next/link';

const AppLayout = ({children}) => {
	return (
		<div>
			<div>
				<Link href="/"><a>다희의 페이지</a></Link>
				<Link href="/profile"><a>프로파일</a></Link>
				<Link href="/signup"><a>회원가입</a></Link>
			</div>	
			{children}
		</div>
	);
};

AppLayout.propTypes = {
	children: PropTypes.node.isRequired
}

export default AppLayout;