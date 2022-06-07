<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Blogs;

class BlogsController extends Controller
{
    //
    public function index()
    {
        return Blogs::all();

    }

    public function store(Request $request) {
        return Blogs::create([
            'title' => $request->title,
            'description' => $request->description,
            'src' => $request->src
        ]);
    }

    public function show($id)
    {
        return Blogs::find($id);
    }

    public function update(Request $request, $id)
    {
        return Blogs::find($id)->update([
            'title' => $request->title,
            'description' => $request->description,
            'src' => $request->src
        ]);
        // return Manager::find($id)->update($request->all());
    }

    public function destroy($id)
    {
        return Blogs::find($id)->delete();
    }
}
