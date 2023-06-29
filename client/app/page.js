import PageContainer from "@/components/PageContainer";
import Description from "@/components/Description";
import Title from "@/components/Title";
import Main from "@/components/Main";

export default async function Home() {
  const data = await getPosts();

  return (
    <PageContainer>
      <Main>
        <Title>Checkin from others (for me)</Title>
        <Description>a recipe for disaster</Description>

        {data.data.map((post) => (
          <div key={post.attributes.slug}>{post.attributes.title}</div>
        ))}
      </Main>
    </PageContainer>
  );
}

  async function getPosts() {
    try {
      const response = await fetch(`${process.env.API_URL}/api/posts`);
      const data = await response.json();
      return data
    } catch (error) {
      console.error('Error:', error);
    }
  }
