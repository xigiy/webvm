// 禁用博客推荐，返回空数组
export async function load()
{
	return { posts: [] };
}