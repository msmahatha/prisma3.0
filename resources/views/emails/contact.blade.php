<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { font-family: Arial, sans-serif; background: #f8f8f8; padding: 40px 0; }
        .card { max-width: 600px; margin: 0 auto; background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.08); }
        .header { background: linear-gradient(135deg, #f59e0b, #f97316, #f43f5e); padding: 32px; }
        .header h1 { color: #fff; margin: 0; font-size: 22px; }
        .body { padding: 32px; }
        .field { margin-bottom: 24px; }
        .label { font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #94a3b8; margin-bottom: 6px; }
        .value { font-size: 16px; color: #1e293b; line-height: 1.6; }
        .footer { padding: 24px 32px; background: #f1f5f9; font-size: 12px; color: #64748b; text-align: center; }
    </style>
</head>
<body>
    <div class="card">
        <div class="header">
            <h1>New Contact Inquiry</h1>
        </div>
        <div class="body">
            <div class="field">
                <div class="label">Name</div>
                <div class="value">{{ $data['name'] }}</div>
            </div>
            <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:{{ $data['email'] }}">{{ $data['email'] }}</a></div>
            </div>
            <div class="field">
                <div class="label">Service</div>
                <div class="value">{{ $data['service'] }}</div>
            </div>
            <div class="field">
                <div class="label">Message</div>
                <div class="value">{{ $data['message'] }}</div>
            </div>
        </div>
        <div class="footer">
            &copy; {{ date('Y') }} Prisma Buildcon. Sent from website contact form.
        </div>
    </div>
</body>
</html>
