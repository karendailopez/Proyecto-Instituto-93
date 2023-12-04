<?php

namespace App\Http\Controllers;

use Illuminate\Http\Client\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class HomeController extends Controller {
    public function index()
    {
        $message = null;
        if (Session::has('message')){
            $message = [];
            $message['title'] = Session::get('message');
            $message['text'] = Session::get('text');
        }
        return Inertia::render('Welcome', compact('message'));
    }
}
