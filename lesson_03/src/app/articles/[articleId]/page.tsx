import Link from 'next/link';

export default function NewsArticle({
    params,
    searchParams,
}: {
    params: { articleId: string };
    searchParams: { lang?: 'en' | 'es' | 'fr' };
}) {
    const { articleId } = params;
    const { lang } = searchParams || {};

    return (
        <div>
            <h1>News article {articleId}</h1>
            <p>Reading in {lang || 'default language'}</p>

            <div>
                <Link href={`/articles/${articleId}?lang=en`}>Read in English</Link>
                <Link href={`/articles/${articleId}?lang=es`}>Read in Spanish</Link>
                <Link href={`/articles/${articleId}?lang=fr`}>Read in French</Link>
            </div>
        </div>
    );
}