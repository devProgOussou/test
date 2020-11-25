<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdvertisementsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('advertisements', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('productName');
            $table->binary('images');
            $table->binary('images1')->nullable();
            $table->binary('images2')->nullable();
            $table->text('description');
            $table->string('category');
            $table->foreignId('user_id')->constrained()->cascadeOnUpdate();
            $table->foreignId('company_id')->nullable();
            $table->foreignId('personal_id')->nullable();
            $table->boolean('isAvailable')->default(true);
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
        Schema::dropIfExists('advertisements');
    }
}
