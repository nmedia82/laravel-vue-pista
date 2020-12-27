<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;
use App\Resource;

class ResourceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $resources = Resource::with('category')->get();
        return response()->json($resources);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $resource = new Resource([
            'title'  => $request->get('title'),
            'description'  => $request->get('description'),
            'category_id'  => $request->get('category_id'),
            'tags'  => $request->get('tags'),
            ]);
        $resource->save();
        
        // thanks: https://stackoverflow.com/questions/61889779/laravel-after-save-model-need-to-refresh-it-to-use-the-relationships
        $resource->load('category');
        
        return response()->json(['message'=>'Resource Added','resource'=>$resource]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = $request->all();
        $resource = Resource::with('category')->find($id);
        $resource->update($data);
        $resource->save();
        $resource->refresh();
        return response()->json(['message'=> 'Resource Updated Successfully','resource'=>$resource], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $resource = Resource::find($id);
        $resource->delete();
        return response()->json(['message'=> 'Resource Removed Successfully'], 201);
    }
}
