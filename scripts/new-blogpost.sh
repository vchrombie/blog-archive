pwd
cd content/posts/
pwd
echo "enter pathname"
read pathname
mkdir $pathname
cd $pathname
mkdir images
touch index.mdx

echo "---" >> index.mdx
echo "title: " >> index.mdx
echo "date: " >> index.mdx
echo "tags: " >> index.mdx
echo "  - " >> index.mdx
echo "  - " >> index.mdx
echo "slug: \"$pathname\"" >> index.mdx
echo "---" >> index.mdx
