<?php

namespace App\Http\Controllers\Knowledge;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

class VocabularyController extends Controller
{
    public function index() {
        return view('pages.knowledge.vocabulary.index');
    }

    public function create() {
        return view('pages.knowledge.vocabulary.create');
    }

    public function save() {
        
    }

    public function edit() {
        return view('pages.knowledge.vocabulary.edit');
    }

    public function execEdit() {

    }

    public function delete() {
        
    }
}
