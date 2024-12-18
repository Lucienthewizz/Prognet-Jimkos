<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        // Tambah kolom role ke tabel users yang sudah ada
        if (!Schema::hasColumn('users', 'role')) {
            Schema::table('users', function (Blueprint $table) {
                $table->enum('role', ['user', 'kost_manager', 'admin'])->default('user');
            });
        }

        // Buat tabel kosts jika belum ada
        if (!Schema::hasTable('kosts')) {
            Schema::create('kosts', function (Blueprint $table) {
                $table->id();
                $table->string('name');
                $table->string('type'); // Putra/Putri/Campur
                $table->integer('price');
                $table->string('location');
                $table->string('distance');
                $table->text('description')->nullable();
                $table->string('image');
                $table->boolean('is_available')->default(true);
                $table->foreignId('manager_id')->nullable()->constrained('users');
                $table->enum('status', ['pending', 'approved', 'rejected'])->default('pending');
                $table->text('rejection_reason')->nullable();
                $table->timestamps();
            });
        }

        // Buat tabel facilities jika belum ada
        if (!Schema::hasTable('facilities')) {
            Schema::create('facilities', function (Blueprint $table) {
                $table->id();
                $table->string('name');
                $table->timestamps();
            });
        }

        // Buat tabel pivot facility_kost jika belum ada
        if (!Schema::hasTable('facility_kost')) {
            Schema::create('facility_kost', function (Blueprint $table) {
                $table->foreignId('kost_id')->constrained()->onDelete('cascade');
                $table->foreignId('facility_id')->constrained()->onDelete('cascade');
                $table->primary(['kost_id', 'facility_id']);
            });
        }
    }

    public function down()
    {
        Schema::dropIfExists('facility_kost');
        Schema::dropIfExists('facilities');
        Schema::dropIfExists('kosts');
        
        if (Schema::hasColumn('users', 'role')) {
            Schema::table('users', function (Blueprint $table) {
                $table->dropColumn('role');
            });
        }
    }
}; 