import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href = '/'><a>Back to Home page</a></Link>
            </h2>
            <ul>
                <li>
                    <Link href = '/posts/abc'>
                        <a>Go to /posts/[pid].js</a>
                    </Link>
                </li>
                <li>
                    <Link href = '/posts/abc?foo=bar'>
                        <a>Go to /posts/[abc]</a>
                    </Link>
                </li>
            </ul>
        </Layout>
    )
}