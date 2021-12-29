<?php

namespace App\Http\Controllers\Knowledge;

use App\Http\Controllers\Controller;
use App\Models\Vocabulary;

use Illuminate\Http\Request;

class VocabularyController extends Controller
{
    public function index(Request $request) {
        $vocabularys = Vocabulary::all();
        return view('pages.knowledge.vocabulary.index', compact('vocabularys'));
    }

    public function create(Request $request) {
        return view('pages.knowledge.vocabulary.create');
    }

    public function save(Request $request) {
        
    }

    public function edit(Request $request) {
        $vocabularyID = $request->id;
        $vocabulary = Vocabulary::where([
            'id' => $vocabularyID,
            'status' => 1
        ])->get();
        return view('pages.knowledge.vocabulary.edit', compact('vocabulary'));
    }

    public function execEdit(Request $request) {

    }

    public function delete(Request $request) {
        
    }
}
