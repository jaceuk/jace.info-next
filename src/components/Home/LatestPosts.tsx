import Link from 'next/link';
import Card from '@components/Card';
import CardGrid from '@components/CardGrid';
import InnerWrapper from '@components/InnerWrapper';
import BlogPostsTitle from './BlogPostsTitle';
import IconLink from '@components/IconLink';
import { ArrowRight } from 'iconoir-react';

interface Props {
  allPostsData: PostData[];
}

interface PostData {
  slug: string;
  excerpt: string;
  title: string;
}

export default function LatestPosts({ allPostsData }: Props) {
  return (
    <section className="section">
      <InnerWrapper>
        <BlogPostsTitle />

        <CardGrid>
          {allPostsData.map(({ slug, excerpt, title }: PostData) => (
            <Card key={slug}>
              <h2>{title}</h2>
              <p>{excerpt}</p>
              <Link href={`/blog/${slug}`}>
                <a>
                  <IconLink>
                    Read more
                    <ArrowRight />
                  </IconLink>
                </a>
              </Link>
            </Card>
          ))}
        </CardGrid>
      </InnerWrapper>
    </section>
  );
}