// /lib/blog-notification-email-template.js

export default function BlogNotificationEmailTemplate(blog, email) {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>${blog.meta.title}</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0">
<tr>
<td align="center" style="padding:40px 10px;">
  
<table width="600" cellpadding="0" cellspacing="0" 
style="background:#ffffff;border-radius:12px;overflow:hidden;">

<!-- HEADER -->
<tr>
<td style="background:#003d3d;padding:24px;text-align:center;">
<h1 style="color:#ffffff;margin:0;font-size:22px;">
munirsuri.com
</h1>
</td>
</tr>

<!-- BODY -->
<tr>
<td style="padding:32px 30px;">

<h2 style="color:#003d3d;font-size:26px;">
${blog.meta.title}
</h2>

<p style="color:#444;font-size:16px;line-height:1.7;">
${blog.meta.description}
</p>

<div style="text-align:center;margin:30px 0;">
<a href="https://munirsuri.com/blog/${blog.meta.slug}"
style="
background:#003d3d;
color:#ffffff;
text-decoration:none;
padding:14px 28px;
border-radius:30px;
font-weight:600;">
Read Full Article →
</a>
</div>

<p style="color:#666;font-size:14px;">
Cheers,<br>
<b>Munir Suri</b>
</p>

</td>
</tr>

<!-- FOOTER -->
<tr>
<td style="
background:#f7f7f7;
padding:18px;
text-align:center;
font-size:12px;
color:#777;">

You’re receiving this because you subscribed on munirsuri.com
<br><br>

<a href="https://munirsuri.com/unsubscribe?email=${email}"
style="color:#003d3d;">
Unsubscribe
</a>

</td>
</tr>

</table>
</td>
</tr>
</table>

</body>
</html>`;
}
