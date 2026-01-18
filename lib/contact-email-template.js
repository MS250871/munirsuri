export default function ContactEmailTemplate({ data }) {
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>New Contact Message</title>
</head>

<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0">
<tr>
<td align="center" style="padding:40px 10px;">

<table width="600" cellpadding="0" cellspacing="0"
style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 14px rgba(0,0,0,0.08);">

<!-- HEADER -->
<tr>
<td style="background:#003d3d;padding:22px;text-align:center;">
<h1 style="
color:#ffffff;
margin:0;
font-size:22px;
letter-spacing:0.5px;">
munirsuri.com
</h1>
</td>
</tr>

<!-- BODY -->
<tr>
<td style="padding:30px 28px;">

<h2 style="
color:#003d3d;
margin-bottom:20px;
font-size:24px;">
New Contact Received
</h2>

<table width="100%" cellpadding="0" cellspacing="0"
style="font-size:15px;color:#444;">

<tr>
<td style="padding:8px 0;"><b>Name:</b></td>
<td>${data.name}</td>
</tr>

<tr>
<td style="padding:8px 0;"><b>Mobile:</b></td>
<td>${data.mobile}</td>
</tr>

<tr>
<td style="padding:8px 0;"><b>Email:</b></td>
<td>${data.email}</td>
</tr>

<tr>
<td style="padding:8px 0;"><b>Subject:</b></td>
<td>${data.subject}</td>
</tr>

</table>

<!-- MESSAGE BOX -->
<div style="
margin-top:24px;
padding:18px;
background:#f7f7f7;
border-left:4px solid #003d3d;
border-radius:6px;">

<p style="
margin:0;
color:#333;
line-height:1.7;">
${data.message}
</p>

</div>

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

This message was sent from your website contact form<br>
<b>munirsuri.com</b>

</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>`;
}
