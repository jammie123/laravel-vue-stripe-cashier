<x-app-layout>
    @if($message = Session::get('success'))
        <div class="alert alert-success">
            <p>{{ $message }}</p>
        </div>
    @endif
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Výpis uživatelů') }}
        </h2>
    </x-slot>

    <div class="py-12 container mx-auto">
        <table class="table-auto">
            <thead>

                <tr>
                    <th class="text-left px-4 py-2 text-light-blue-600">Jméno a příjmení</th>
                    <th class="text-left px-4 py-2 text-light-blue-600">Email</th>
                    <th class="text-left px-4 py-2 text-light-blue-600">Počet objednávek</th>

                    <th class="text-left"></th>
                    <th class="text-left"></th>
                </tr>
            </thead>
            <tbody>
            @foreach($users as $user)

                <tr>
                    <td class="w-1/5 border border-gray-900 px-4 py-2 text-light-blue-600 font-medium">{{ $user->name }}</td>
                    <td class="w-1/5 border border-gray-900 px-4 py-2 text-light-blue-600 font-medium">{{ $user->email }}</td>
                    <td class="w-1/5 border border-gray-900 px-4 py-2 text-light-blue-600 font-medium">{{ count($user->orders) }}</td>

                    <td class="border border-gray-900 px-4 py-2 text-light-blue-600 font-medium"><a href="{{ route('users.edit', $user->id) }}">Editovat</a></td>
                    <td class="border border-gray-900 px-4 py-2 text-light-blue-600 font-medium">
                        <form action="{{ route('users.destroy',$user->id) }}"
                            method="POST">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="btn btn-danger">Smazat</button>
                        </form>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>
</x-app-layout>
