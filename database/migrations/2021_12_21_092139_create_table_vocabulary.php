<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableVocabulary extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vocabulary', function (Blueprint $table) {
            $table->id();
            $table->string('vocabulary')->nullable();
            $table->string('explain')->nullable();
            $table->string('pronounce')->nullable();
            $table->string('images')->nullable();
            $table->string('example')->nullable();
            $table->integer('view')->nullable();
            $table->integer('status')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('vocabulary');
    }
}
