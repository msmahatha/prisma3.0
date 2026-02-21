<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactFormRequest;
use App\Mail\ContactMail;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function send(ContactFormRequest $request)
    {
        $data = $request->validated();

        Mail::to('info@prismabuildcon.com')->send(new ContactMail($data));

        return back()->with('success', 'Your message has been sent! We\'ll get back to you shortly.');
    }
}
