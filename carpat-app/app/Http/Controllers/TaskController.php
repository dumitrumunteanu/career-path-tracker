<?php

namespace App\Http\Controllers;

use App\Http\Resources\TaskResource;
use App\Models\User;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index(User $user, Request $request)
    {
        if ($request->user()->id === $user->id) {
            return TaskResource::collection($user->tasks)->response();
        } else {
            return \response('', 403);
        }
    }
}
