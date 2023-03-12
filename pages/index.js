import {getAllPosts} from "../utils/PostRepo"
import {Post} from '../components/Post';

export default function IndexPage({posts}) {
    return (
        <div className="base-container mt-16 md:grid md:grid-cols-5">
            <div className="col-span-3">
                <div>
                    <div className="text-black">
                        Latest Iterations by <a className="a-link" href="https://twitter.com/phatnhse">phatnhse</a>
                    </div>
                    <ul>
                        {posts.map((post, index) => (
                            <li key={index}>
                                <Post post={post}/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export const getStaticProps = async () => {
    const posts = getAllPosts()

    return {
        props: {posts},
    };
};

